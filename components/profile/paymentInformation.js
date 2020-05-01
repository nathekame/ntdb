import React, { useState,useEffect, useContext } from 'react'

import { ProfileContext } from '../../store/contexts/profileContext'

import Navbar from '../layouts/navbar'

//import '../../public/assets/style.scss';
import Logout from '../../utility/logout'
import checkInLocalStorage from '../componentUtility/persistLocalToState';
import axiosFuncs from '../../utility/axios';

import Validator from 'validatorjs';
import Cookie from 'js-cookie'
import jwtFuncs from '../../utility/jwt';
import composeApiData from '../componentUtility/composeApiData';

import _ from 'lodash'
 //   const cropper = React.createRef(null);

 import 'materialize-css/dist/css/materialize.min.css'





const PaymentInformation = (props) => {

//   const coVal = Cookie.get("auth");
 
//   const profileStep = (cookie) => {
//       return cookie ? jwtFuncs.jwtProfileStep(cookie) : 1 
//   }

//   const sessionProStep = profileStep(coVal);






 const { dispatch } = useContext(ProfileContext);


 const [paymentInformation, setPaymentInformation] = useState(
              {
                // prevProfileStep:3,
                // nextProfileStep:5,
                profileStep:5,
                bankName: checkInLocalStorage("paymentInformation", "bankName"),
                accountName:checkInLocalStorage("paymentInformation", "accountName"),
                accountNumber:checkInLocalStorage("paymentInformation", "accountNumber"),
                bvn: checkInLocalStorage("paymentInformation", "bvn"),
             //   isBvnUnique: checkInLocalStorage("paymentInformation", "isBvnUnique")
 

              })



  const [buttonStateF, setButtonStateF] = useState(true);
  const [buttonStateB, setButtonStateB] = useState(false);

  const [isUnique, setIsUnique ] = useState();

  const [isVerified, setIsVerified ] = useState(false);
                  
  let rules = {

    bankName: 'required',
    accountName: 'required',
    accountNumber: 'required|numeric|accNumberCount',
    bvn: 'required|numeric|bvnCount|checkIfVerified',
    
   // isBvnUnique:'bvnC'
   
  //  email: 'required|email',
  //  age: 'min:18'
  };

  
  

 
//   const checkBVN = (bvn, requirement, attribute)=>{
//     console.log("i am checking the bvn  for validation "+bvn);
//     console.log("i am checking the bvn  for requirement "+requirement);
//     console.log("i am checking the bvn  for attribute "+attribute);
//     //return value.match(/^\d{3}-\d{3}-\d{4}$/);

//     //const requ = _.isEmpty({name:12});
//     const requ =  isUnique;

//     console.log("the requ "+requ);

//     return requ;
//   //  return false


// }

const checkBVNSize = (bvn, requirement, attribute)=>{
  // console.log("i am checking the bvn  for validation "+bvn);
  // console.log("i am checking the bvn  for requirement "+requirement);
  // console.log("i am checking the bvn  for attribute "+attribute);

  const requ = _.size(bvn);
  console.log("the requ from the size of the bvn ============ "+paymentInformation.bvn);

  if(requ === 11){
    return true
  }
  if(requ !== 11){
    return false
  }


}

const checkAccNumberSize = (accNumber, requirement, attribute)=>{

  const requ = _.size(accNumber);
  console.log("the requ from the size of the acc number ============ "+requ);

  if(requ === 10){
    return true
  }
  if(requ !== 10){
    return false
  }


}


const checkIfVerified = () => {

    const verify = isVerified;

    if(verify === true){
      return true
    }
    if(verify === false){
    return false
    }



}

  //Validator.register('bvnC',checkBVN , 'Your :attribute is not unique.');
  Validator.register('bvnCount',checkBVNSize , 'Your BVN must be 11 digits.');
  Validator.register('checkIfVerified',checkIfVerified , 'You Must Verify your BVN First.');
  Validator.register('accNumberCount',checkAccNumberSize , 'Your Account Number must be 10 digits.');
  
  
  let validation = new Validator(paymentInformation, rules, { required: '*', numeric: 'Field Must Digits' });

  validation.fails(); // true
  validation.passes(); // false




  useEffect(() => {

            if (validation.passes()) {
                    setButtonStateF(false);
                  // console.log("the   buttonStete "+buttonState);  
              }else{
                setButtonStateF(true);
              
          }
      },[paymentInformation]);




const  handleChange =(e) => {
                e.preventDefault(); 
                setPaymentInformation({ ...paymentInformation, [e.target.id]: e.target.value })
            
              }


const handleForward = async e => {

   e.preventDefault();
  //   dispatch({type: 'ADD_PROFILE_DATA', payload: paymentInformation});
  if (validation.passes()) { 
     dispatch({type: 'ADD_PROFILE_DATA', payload: {paymentInformation: paymentInformation}});
  
     const next = "F"
     const go = await props.updatestep(next);
     dispatch({type: 'CURRENT_STEP', payload: paymentInformation.profileStep+1});
     if(go){
       return go
     }
  }
 

}

const handleBack = e => {

    e.preventDefault();

    const next = "B"
    const go = props.updatestep(next);
    dispatch({type: 'CURRENT_STEP', payload: paymentInformation.profileStep-1});
    if(go){

      return go
    }


  
}



const handleBVNValidation = async () => {

  const currentBVN = paymentInformation.bvn;
  const confirm =  checkBVNSize(currentBVN);
  console.log(" thi confirmation if it is reall on "+confirm);
  if(confirm === true){

    const output = await axiosFuncs.checkBVN(currentBVN);
    const status = output.status
  
    if (status === 200) {
      setIsUnique(false);
      setIsUnique(false);
      setIsVerified(false);
    }
    if (status === 201) {
      setButtonStateF(false);
      setIsUnique(true);
      setIsVerified(true);
    }

  }
  
 // console.log(" the out put of the externaal check "+JSON.stringify(output));

 



 // return output

}

const validationCheck = () =>{
   
    if(isUnique === true){
      return (
        <div>
        <span className="fieldSuccess">Validation Passed</span>
       
       </div>
      )
    }

    if(isUnique === false){
      return (
        <div>
        <span className="fieldError">Validation Failed</span>
        
        </div>
      )
    }
 
}


const handleSaveNow = async e => {


  //  console.log("i am here to save first foitiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
  
  e.preventDefault();
  
  const data =  {...paymentInformation,  profileStep: paymentInformation.profileStep+1};

    
  if (validation.passes()) {  
      const dataToPost = composeApiData.composeFullProfileData(data);
        let api = await axiosFuncs.profilePost(dataToPost);
        if(api.data === "error" ){
          console.log("the log is error");
        }
        if (api.data === "success") {
          console.log("the log is success"+api.status);

          // router.push('/account')
          dispatch({type: 'CLEAR_CONTEXT'});
          Logout();
          
        }
     }else{
        dispatch({type: 'CLEAR_CONTEXT'});
        Logout();
      }
    //logout();
  
  }
  




  return (








                <div className="container">
                    
                    <div className="row">      
                
                        
                            <div className="">

                                <div className="profileForm">


                                    <div className="formPadding z-depth-2">
                                    
                                        <div className="row">
                                                <h4 className="center">Payment Information</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col s12">
                                                <label htmlFor="bankName"><h6><span className="text">Bank Name</span> <span className="fieldError">{validation.errors.get("bankName")}</span></h6></label>                                   
                                                <select id='bankName' onChange={handleChange} value={paymentInformation.bankName} className="browser-default select" >
                                                    <option value="" />
                                                    <option value={"ACCESS BANK"}>ACCESS BANK</option>
                                                    <option value={"ACCESS BANK PLC(DIAMOND)"}>ACCESS BANK PLC(DIAMOND)</option>
                                                    <option value={"CITI BANK"}>CITI BANK</option>
                                                    <option value={"ECOBANK"}>ECOBANK</option>
                                                    <option value={"ENTERPRISE BANK"}>ENTERPRISE BANK</option>
                                                    <option value={"FCMB(FIRST CITY MONUMENT BANK)"}>FCMB(FIRST CITY MONUMENT BANK)</option>
                                                    <option value={"FIDELITY BANK"}>FIDELITY BANK</option>
                                                    <option value={"FIRST BANK OF NIGERIA"}>FIRST BANK OF NIGERIA</option>
                                                    <option value={"GTBANK PLC"}>GTBANK PLC</option>
                                                    <option value={"HERITAGE BANK"}>HERITAGE BANK</option>
                                                    <option value={"JAIZ BANK"}>JAIZ BANK</option>
                                                    <option value={"KEYSTONE BANK"}>KEYSTONE BANK</option>
                                                    <option value={"POLARIS BANK (FORMERLY KNOWN AS SKYE BANK)"}>POLARIS BANK (FORMERLY KNOWN AS SKYE BANK)</option>
                                                    <option value={"PROVIDUS BANK"}>PROVIDUS BANK</option>
                                                    <option value={"STANBIC IBTC BANK"}>STANBIC IBTC BANK</option>
                                                    <option value={"STANDARD CHARTERED BANK"}>STANDARD CHARTERED BANK</option>
                                                    <option value={"STERLING BANK"}>STERLING BANK</option>
                                                    <option value={"SUNTRUST BANK"}>SUNTRUST BANK</option>
                                                    <option value={"UBA BANK (UNITED BANK FOR AFRICA)"}>UBA BANK (UNITED BANK FOR AFRICA)</option>
                                                    <option value={"UNION BANK"}>UNION BANK</option>
                                                    <option value={"UNITY BANK"}>UNITY BANK</option>
                                                    <option value={"WEMA BANK"}>WEMA BANK</option>
                                                    <option value={"ZENITH BANK"}>ZENITH BANK</option>
                                                </select>
                                                            
                                            </div>  
                                                                                        
                                        </div>  
                        
                                        <div className="row">
                                            <div className="col s12"> 
                                              <label htmlFor="accountName"><h6><span className="text">Account Name</span> <span className="fieldError">{validation.errors.get("accountName")}</span></h6></label>                                   
                                              <input id="accountName" onChange={handleChange} value={paymentInformation.accountName} />                          
                                            </div>
                                    
                                        </div>
                            
                                        <div className="row">
                                            <div className="col s12"> 
                                              <label htmlFor="accountNumber"><h6><span className="text">Account Number</span> <span className="fieldError">{validation.errors.get("accountNumber")}</span></h6></label>                                   
                                              <input id="accountNumber" onChange={handleChange} value={paymentInformation.accountNumber}/>               
                                            </div>
                                                            
                                        </div>

                                        <div className="row">
                                            <div className="col s12 m9 l10"> 
                                                <label htmlFor="bvn"><h6><span className="text">Bank Verification Number(BVN)</span>{validationCheck()}<span className="fieldError">{validation.errors.get("bvn")}</span></h6></label>                                   
                                                <input id="bvn" onChange={handleChange} value={paymentInformation.bvn} />  
                                            </div>
                                            <div className="col s12 m3 l2"> 
                                                <div className="hidden">Hidden</div>
                                                <button onClick={handleBVNValidation}>Verify BVN</button>
                                             </div>
                                                            
                                        </div>



                                        <div className="row">
                                            <div className="col s6"> 
                                            <button className="button black"  disabled={buttonStateB} onClick={handleBack}>Back </button>     
                                            </div>
                                            <div className="col s6"> 
                                            <button className="button black" disabled={buttonStateF} onClick={handleForward}>Next</button>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="column componentFooter">
                                                <span>5/6</span>
                                            </div>
                                        </div>
                                    </div>

                            </div>
                        </div>
                            
                    </div>

                </div>




  )

}


export default PaymentInformation;







