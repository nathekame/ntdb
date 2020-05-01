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

import 'materialize-css/dist/css/materialize.min.css'


 //   const cropper = React.createRef(null);

const GuarantorInformation = (props) => {


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
//   const localStorageValue = getLocalItem["guarantorInformation"][val]

//   console.log(" i have to trouble shoot from here "+localStorageValue);

//   if(localStorageValue !== undefined){
//   //  console.log("there is a value   -->>"+localValue);
//     return localStorageValue
//   }else{
//     return ''
//   }
// }


 const [guarantorInformation, setGuarantorInformation] = useState(
              {
                // prevProfileStep:1,
                // nextProfileStep:3,
                profileStep:3,
                fullName: checkInLocalStorage("guarantorInformation","fullName"),
                mobileNumber: checkInLocalStorage("guarantorInformation","mobileNumber"),
                guarantorCategory: checkInLocalStorage("guarantorInformation", "guarantorCategory"),
                address: checkInLocalStorage("guarantorInformation", "address"),
                guarantorLetterFile: checkInLocalStorage("guarantorInformation", "guarantorLetterFile"),
                guarantorLetterFileUrl: checkInLocalStorage("guarantorInformation", "guarantorLetterFileUrl"),
            


              })
            


const [buttonStateF, setButtonStateF] = useState(true);
const [buttonStateB, setButtonStateB] = useState(false);
                 
let rules = {

  fullName:  'required',
  mobileNumber: 'required|numeric|mobileNumberCount',
  guarantorCategory: 'required',
  address:  'required',
  guarantorLetterFile:  'required'

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
  

let validation = new Validator(guarantorInformation, rules, { required: '*' });

validation.fails(); // true
validation.passes(); // false



useEffect(() => {

          if (validation.passes()) {
                  setButtonStateF(false);
                 // console.log("the   buttonStete "+buttonState);  
             }else{
              setButtonStateF(true);
            
         }
    },[guarantorInformation]);

// useEffect(() => {

//       if (guarantorInformation.profileStep === sessionProStep ) {
//               setButtonStateB(true);
//             //  console.log("the   buttonStete "+guarantorInformation.profileStep);  
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
                setGuarantorInformation({ ...guarantorInformation, [e.target.id]: e.target.value })
            
              }



 const  handleImageChange =(e) => {
                 e.preventDefault();
               
                 let reader = new FileReader();
                 let file = e.target.files[0];
               
               //   console.log("this is the imagfe check view ===================>>>>>>>>>>>>>" +file);
               reader.onloadend = () => {
                setGuarantorInformation({ ...guarantorInformation, guarantorLetterFile: file, guarantorLetterFileUrl: reader.result })  
               }
          
               
                  reader.readAsDataURL(file)
               }
               


const handleForward = async e => {

    e.preventDefault();
 //   dispatch({type: 'ADD_PROFILE_DATA', payload: guarantorInformation});
  if (validation.passes()) { 
      dispatch({type: 'ADD_PROFILE_DATA', payload: {guarantorInformation: guarantorInformation}});
      const next = "F"
      const go = await props.updatestep(next);
      dispatch({type: 'CURRENT_STEP', payload: guarantorInformation.profileStep+1});
      if(go){
        return go
      }
    }

}

const handleBack = async e => {

    e.preventDefault();

    const next = "B"
    const go = await props.updatestep(next);
    dispatch({type: 'CURRENT_STEP', payload: guarantorInformation.profileStep-1});
    if(go){
  
      return go
    }
  
}


// const handleSaveNow = async e => {

//     e.preventDefault();
//   //  const data = {...commonData, ...uniqueData};


//     const data = {...guarantorInformation,  profileStep: guarantorInformation.profileStep+1};
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
//     const setLocalItem = localStorageFuncs.setItemInStorage("profile", guarantorInformation);

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



 <div className="container">
              
              <div className="row">      
          
                  
                    <div className="">

 			            <div className="profileForm">


                            <div className="formPadding z-depth-2">
                               
                                <div className="row">
                                         <h4 className="center">Guarantor Information</h4>
                                </div>
                                <div className="row">
                                      <div className="col s12 m12 l6">
                                          <label htmlFor="fullName"><h6><span className="text">Full Name</span> <span className="fieldError">{validation.errors.get("fullName")}</span></h6></label>                              
                                          <input id="fullName"  onChange={handleChange} value={guarantorInformation.fullName} />                                       
                                      </div>  
                                      <div className="col s12 m12 l6">            
                                          <label htmlFor="mobileNumber"><h6><span className="text">Mobile Number</span> <span className="fieldError">{validation.errors.get("mobileNumber")}</span></h6></label>                              
                                          <input id="mobileNumber"  onChange={handleChange} value={guarantorInformation.mobileNumber} />          
                                      </div>
                                                  
                                </div>  


                    
                 
                                <div className="row">
                                   <div className="col s12">   
                                       <label htmlFor="guarantorCategory"><h6><span className="text">Guarantor Category</span> <span className="fieldError">{validation.errors.get("guarantorCategory")}</span></h6></label>                              
                                        <select id="guarantorCategory" onChange={handleChange} value={guarantorInformation.guarantorCategory} className="browser-default select">
                                            <option value="" />
                                            <option value={"Senior Police Officer"}>Senior Police Officer</option>
                                            <option value={"Senior Military Officers"}>Senior Military Officers</option>
                                            <option value={"SBMS"}>SBMS</option>
                                            <option value={"PTA"}>PTA</option>
                                            <option value={"Senior Civil Servant (Level 17)"}>Senior Civil Servant (Level 17)</option>
                                            <option value={"Certified Lawer"}>Certified Lawer</option>
                                        </select>

                                  </div>
                                </div>

                                <div className="row">
                                    <div className="col s12">
                                        <label htmlFor="address"><h6><span className="text">Address</span> <span className="fieldError">{validation.errors.get("address")}</span></h6></label>                              
                                        <textarea id="address" onChange={handleChange} value={guarantorInformation.address}></textarea>  

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s12">
                                        <label htmlFor="guarantorLetter"><h6><span className="text">Guarantor Letter Upload</span> <span className="fieldError">{validation.errors.get("guarantorLetter")}</span></h6></label>                              
                                        <input  type='file' id="guarantorLetter" onChange={(e)=>handleImageChange(e)} />  

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s12">
                                       <embed class="responsive-img formLogo" src={guarantorInformation.guarantorLetterFileUrl} style={{width:"200", height:"400"}} />         
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
                                        <span>3/6</span>
                                    </div>
                                </div>
                         </div>

                    </div>
		        </div>
                    
              </div>

        </div>





      
  )
}


export default GuarantorInformation;




