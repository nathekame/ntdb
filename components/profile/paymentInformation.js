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
                bvn: checkInLocalStorage("paymentInformation", "bvn")
 

              })



  const [buttonStateF, setButtonStateF] = useState(true);
  const [buttonStateB, setButtonStateB] = useState(false);
                  
  let rules = {

    bankName: 'required',
    accountName: 'required',
    accountNumber: 'required',
    bvn: 'required',
   

  //  email: 'required|email',
  //  age: 'min:18'
  };
  
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

//   useEffect(() => {

//         if (paymentInformation.profileStep === sessionProStep ) {
//                 setButtonStateB(true);
//               //  console.log("the   buttonStete "+paymentInformation.profileStep);  
//           }else{
//                 setButtonStateB(false);
          
//       }
//   });


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
                    <label htmlFor="bvn">Bank Verification Number(bvn)   <span className="fieldError">{validation.errors.get("bvn")}</span></label>               
                    <input id="bvn" onChange={handleChange} value={paymentInformation.bvn} />               
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







