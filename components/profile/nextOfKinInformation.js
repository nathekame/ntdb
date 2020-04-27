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

//import localStorageFuncs from '../../../utility/localStorage'



 //   const cropper = React.createRef(null);

const NextOfKinInformation = (props) => {


  //console.log("this is the passed in props +"+JSON.stringify(props));
 // console.log("this is the passed in props -"+props.stepremove);

// const coVal = Cookie.get("auth");
 
// const profileStep = (cookie) => {
//     return cookie ? jwtFuncs.jwtProfileStep(cookie) : 1 
//  }

// const sessionProStep = profileStep(coVal);

//console.log("the pro step "+sessionProStep);



 const { dispatch  } = useContext(ProfileContext);

//  const checkInLocalStorage = (val) => {

//   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");
//   const localStorageValue = getLocalItem["nextOfKinInformation"][val]

//   console.log(" i have to trouble shoot from here "+localStorageValue);

//   if(localStorageValue !== undefined){
//   //  console.log("there is a value   -->>"+localValue);
//     return localStorageValue
//   }else{
//     return ''
//   }
// }


 const [nextOfKinInformation, setContectInformation] = useState(
              {
                // prevProfileStep:1,
                // nextProfileStep:3,
                profileStep:3,
                fullName: checkInLocalStorage("nextOfKinInformation","fullName"),
                relationship: checkInLocalStorage("nextOfKinInformation", "relationship"),
                address: checkInLocalStorage("nextOfKinInformation", "address"),
                emailAddress: checkInLocalStorage("nextOfKinInformation","emailAddress"),
                mobileNumber: checkInLocalStorage("nextOfKinInformation","mobileNumber"),


              })


const [buttonStateF, setButtonStateF] = useState(true);
const [buttonStateB, setButtonStateB] = useState(false);
                 
let rules = {

  fullName: 'required',
  relationship: 'required',
  address: 'required',
  emailAddress: 'email',
  mobileNumber: 'required|numeric|mobileNumberCount',

//  email: 'required|email',
//  age: 'min:18'
};
 


const checkMobileNumberSize = (mobileNumber, requirement, attribute)=>{

  const requ = _.size(mobileNumber);
  //console.log("the requ from the size of the acc number ============ "+requ);

  if(requ === 11){
    return true
  }
  if(requ !== 11){
    return false
  }


}



Validator.register('mobileNumberCount',checkMobileNumberSize , 'Mobile Numbers Must Be 11 Digits.');
  

let validation = new Validator(nextOfKinInformation, rules, { required: 'required*' });

validation.fails(); // true
validation.passes(); // false



useEffect(() => {

          if (validation.passes()) {
                  setButtonStateF(false);
                 // console.log("the   buttonStete "+buttonState);  
             }else{
              setButtonStateF(true);
            
         }
    },[nextOfKinInformation]);

// useEffect(() => {

//       if (nextOfKinInformation.profileStep === sessionProStep ) {
//               setButtonStateB(true);
//             //  console.log("the   buttonStete "+nextOfKinInformation.profileStep);  
//          }else{
//               setButtonStateB(false);
        
//      }
// });


// const updateState = () =>{

//   console.log("i have reached this place for the user effct")

// }

//   useEffect(updateState, []);

const  handleChange =(e) => {
                e.preventDefault(); 
                setContectInformation({ ...nextOfKinInformation, [e.target.id]: e.target.value })
            
              }


const handleForward = async e => {

    e.preventDefault();
 //   dispatch({type: 'ADD_PROFILE_DATA', payload: nextOfKinInformation});
  if (validation.passes()) { 
      dispatch({type: 'ADD_PROFILE_DATA', payload: {nextOfKinInformation: nextOfKinInformation}});
      const next = "F"
      const go = await props.updatestep(next);
      dispatch({type: 'CURRENT_STEP', payload: nextOfKinInformation.profileStep+1});
      if(go){
        return go
      }
    }

}

const handleBack = async e => {

    e.preventDefault();

    const next = "B"
    const go = await props.updatestep(next);
    dispatch({type: 'CURRENT_STEP', payload: nextOfKinInformation.profileStep-1});
    if(go){
  
      return go
    }
  
}


// const handleSaveNow = async e => {

//     e.preventDefault();
//   //  const data = {...commonData, ...uniqueData};


//     const data = {...nextOfKinInformation,  profileStep: nextOfKinInformation.profileStep+1};
//    // console.log("the neww contact details JJ "+JSON.stringify(data));

//    if (validation.passes()) {  
//      const dataToPost = composeApiData.composeFullProfileData(data);
//     let api = await axiosFuncs.profilePost(dataToPost);
//     if(api.data === "error" ){
//       console.log("the log is error");
//     }
//     if (api.data === "success") {
//       console.log("the log is success"+api.status);

//       // router.push('/account')
//       dispatch({type: 'CLEAR_CONTEXT'});
//       Logout();
    
//     }
//   }else{
//     dispatch({type: 'CLEAR_CONTEXT'});
//     Logout();
//   }
 

//     //logout();
  
//   }



// const persistToLocalStorage = () => {

//   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");

//   if(getLocalItem !== undefined){

 

//   }else{

//    // console.log("i=the local storage is empty make i put something insidehinixdopd")
//   //  const newData = {...getLocalItem, personalDetails };
//     const setLocalItem = localStorageFuncs.setItemInStorage("profile", nextOfKinInformation);

//     return setLocalItem;

//   }

// }




// useEffect(() => {
//   // set local storage

//   //console.log("this is the use effect running up and downnnnnnn   nooooooooooooowwwwwwwwwwww")
//  // dispatch({type: 'CLEAR_DATA'});

//   persistToLocalStorage();
//   // persistToState();
//   // checkLocalStorage("firstName");
// })


  




  return (

<div>
     <div className="pagegrid">
      <Navbar />

        <div className="innergrid">

            <div className="profile-form" >

            <h3>Next Of Kin Information </h3>

            <div className="two-column-row">
                      <div className="column">                  
                          <label htmlFor="fullName">Full Name  <span className="fieldError">{validation.errors.get("fullName")}</span></label>
                          <input id="fullName"  onChange={handleChange} value={nextOfKinInformation.fullName} />        
        
                      </div>
                      <div className="column">
                          <label htmlFor="relationship">Relationship <span className="fieldError">{validation.errors.get("relationship")}</span></label>
                          <input id="relationship"  onChange={handleChange} value={nextOfKinInformation.relationship} />        
                     
                      </div>
            </div>

            <div className="two-column-row">
                  <div className="column">
                    <label htmlFor="emailAddress">Email Address   <span className="fieldError">{validation.errors.get("emailAddress")}</span></label>               
                    <input id="emailAddress"  onChange={handleChange} value={nextOfKinInformation.emailAddress} />                 
                  </div>
                  <div className="column">
                    <label htmlFor="mobileNumber">Mobile Number   <span className="fieldError">{validation.errors.get("mobileNumber")}</span></label>
                    <input id="mobileNumber"  onChange={handleChange} value={nextOfKinInformation.mobileNumber} />    
                  </div>
            </div>

            <div className="one-column-row">
                  <div className="column">
                    <label htmlFor="address">Address   <span className="fieldError">{validation.errors.get("address")}</span></label>               
                    <textarea id="address" onChange={handleChange} value={nextOfKinInformation.address}></textarea>               
                  </div>
           
            </div>

      

            <div className="two-column-row">
                      <div className="column">
                         <button variant="outlined"   size="small" color="primary" disabled={buttonStateB} onClick={handleBack}>	Back </button>
                      </div>
                      {/* <div className="column">
                         <button  size="small" color="primary"  onClick={handleSaveNow}>Save And Logout</button>
                      </div> */}
                      <div className="column">
                         <button size="small" color="primary" disabled={buttonStateF} onClick={handleForward}>Next</button>
                      </div>
                  </div>


                  <div className="one-column-row">
                      <div className="column componentFooter">
                         <span>3/6</span>
                      </div>
                  </div>

            </div>
        </div>
    </div>
    </div>


      
  )
}


export default NextOfKinInformation;




