import React, { useState,useEffect, useContext } from 'react'

import { ProfileContext } from '../../store/contexts/profileContext'

import Navbar from '../layouts/navbar'

import '../../public/assets/style.scss';
import Logout from '../../utility/logout'
import checkInLocalStorage from '../componentUtility/persistLocalToState';
import axiosFuncs from '../../utility/axios';

import Validator from 'validatorjs';
import Cookie from 'js-cookie'
import jwtFuncs from '../../utility/jwt';
import composeApiData from '../componentUtility/composeApiData';

import _ from 'lodash'
 //   const cropper = React.createRef(null);

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
                  
  let rules = {

    bankName: 'required',
    accountName: 'required',
    accountNumber: 'required|numeric|accNumberCount',
    bvn: 'required|numeric|bvnCount',
    
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
  console.log("the requ from the size of the bvn ============ "+requ);

  if(requ === 11){
    return true
  }
  if(requ !== 11){
    return false
  }


}

const checkAccNumberSize = (accNumber, requirement, attribute)=>{

  const requ = _.size(accNumber);
  //console.log("the requ from the size of the acc number ============ "+requ);

  if(requ === 10){
    return true
  }
  if(requ !== 10){
    return false
  }


}


  //Validator.register('bvnC',checkBVN , 'Your :attribute is not unique.');
  Validator.register('bvnCount',checkBVNSize , 'Your BVN must be 11 digits.');
  Validator.register('accNumberCount',checkAccNumberSize , 'Your Account Number must be 10 digits.');
  
  
  let validation = new Validator(paymentInformation, rules, { required: 'required*' });

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
    }
    if (status === 201) {
      setButtonStateF(false);
      setIsUnique(true);
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



    <div className="pagegrid">
      <Navbar />

        <div className="innergrid">

            <div className="profile-form" >

            <h3>Payment Information</h3>

            <div className="one-column-row">
                <div className="column">
                    <label htmlFor="bankName">Bank Name <span className="fieldError">{validation.errors.get("bankName")}</span></label>
                    <select id='bankName' onChange={handleChange} value={paymentInformation.bankName} >
                        <option value="" />
                        <option value={"UBA"}>UBA</option>
                        <option value={"GTB"}>GTB</option>
                        <option value={"FCMB"}>FCMB</option>
                    </select>
                </div>
            </div>

            <div className="one-column-row">
                  <div className="column">
                    <label htmlFor="accountName">Account Name   <span className="fieldError">{validation.errors.get("accountName")}</span></label>               
                    <input id="accountName" onChange={handleChange} value={paymentInformation.accountName} />         
                  </div>
            </div>


            <div className="one-column-row">
                  <div className="column">
                    <label htmlFor="accountNumber">Account Number   <span className="fieldError">{validation.errors.get("accountNumber")}</span></label>               
                    <input id="accountNumber" onChange={handleChange} value={paymentInformation.accountNumber}/>               
                  </div>
            </div>


            <div className="one-column-row">
                  <div className="column">
                    <label htmlFor="bvn">Bank Verification Number(bvn)  {validationCheck()}  <span className="fieldError">{validation.errors.get("bvn")}</span></label>               
                    <input id="bvn" onChange={handleChange} value={paymentInformation.bvn} />  
                  
                    <span ><button onClick={handleBVNValidation}>Verify BVN</button></span>             
                  </div>
            </div>









            <div className="two-column-row">
                      <div className="column">
                         <button disabled={buttonStateB}  size="small" color="primary" onClick={handleBack}>Back</button>
                      </div>
                  
                      <div className="column">
                         <button disabled={buttonStateF} size="small" color="primary" onClick={handleForward}>Next</button>
                      </div>
                  </div>

                  <div className="one-column-row">
                      <div className="column componentFooter">
                         <span>5/6</span>
                      </div>
                  </div>

            </div>
        </div>
    </div>



  )

}


export default PaymentInformation;







