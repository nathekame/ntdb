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

import 'materialize-css/dist/css/materialize.min.css'

//import localStorageFuncs from '../../../utility/localStorage'



 //   const cropper = React.createRef(null);

const ContactInformation = (props) => {


  //console.log("this is the passed in props +"+JSON.stringify(props));
 // console.log("this is the passed in props -"+props.stepremove);

//const coVal = Cookie.get("auth");
 
// const profileStep = (cookie) => {
//     return cookie ? jwtFuncs.jwtProfileStep(cookie) : 1 
//  }

//const sessionProStep = profileStep(coVal);

//console.log("the pro step "+sessionProStep);



 const { dispatch  } = useContext(ProfileContext);

//  const checkInLocalStorage = (val) => {

//   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");
//   const localStorageValue = getLocalItem["contactInformation"][val]

//   console.log(" i have to trouble shoot from here "+localStorageValue);

//   if(localStorageValue !== undefined){
//   //  console.log("there is a value   -->>"+localValue);
//     return localStorageValue
//   }else{
//     return ''
//   }
// }


 const [contactInformation, setContactInformation] = useState(
              {
                // prevProfileStep:1,
                // nextProfileStep:3,
                profileStep:2,
                stateOfOrigin: checkInLocalStorage("contactInformation","stateOfOrigin"),
                lga: checkInLocalStorage("contactInformation", "lga"),
                address: checkInLocalStorage("contactInformation", "address"),
                controlNumber: checkInLocalStorage("contactInformation","controlNumber"),
                mobileNumber: checkInLocalStorage("contactInformation","mobileNumber"),


              })


const [buttonStateF, setButtonStateF] = useState(true);
const [buttonStateB, setButtonStateB] = useState(false);
                 
let rules = {

  stateOfOrigin: 'required',
  lga: 'required',
  address: 'required',
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


let validation = new Validator(contactInformation, rules, { required: '*', numeric: 'Mobile Number Must Be Digits' });

validation.fails(); // true
validation.passes(); // false



useEffect(() => {

          if (validation.passes()) {
                  setButtonStateF(false);
                 // console.log("the   buttonStete "+buttonState);  
             }else{
              setButtonStateF(true);
            
         }
    },[contactInformation]);

// useEffect(() => {

//       if (contactInformation.profileStep === sessionProStep ) {
//               setButtonStateB(true);
//             //  console.log("the   buttonStete "+contactInformation.profileStep);  
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
                setContactInformation({ ...contactInformation, [e.target.id]: e.target.value })
            
              }


const handleForward = async e => {

    e.preventDefault();
 //   dispatch({type: 'ADD_PROFILE_DATA', payload: contactInformation});
  if (validation.passes()) { 
      dispatch({type: 'ADD_PROFILE_DATA', payload: {contactInformation: contactInformation}});
      const next = "F"
      const go = await props.updatestep(next);
      dispatch({type: 'CURRENT_STEP', payload: contactInformation.profileStep+1});
      if(go){
        return go
      }
    }

}

const handleBack = async e => {

    e.preventDefault();

    const next = "B"
    const go = await props.updatestep(next);
    dispatch({type: 'CURRENT_STEP', payload: contactInformation.profileStep-1});
    if(go){
  
      return go
    }
  
}


const handleSaveNow = async e => {


  //  console.log("i am here to save first foitiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
  
    e.preventDefault();
  //  const data = {...commonData, ...uniqueData};

   // setContactInformation({ ...contactInformation, profileStep: 3 });

   //console.log("the neww contact details J "+JSON.stringify(contactInformation));

    const data = {...contactInformation,  profileStep: contactInformation.profileStep+1};
   // console.log("the neww contact details JJ "+JSON.stringify(data));

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



// const persistToLocalStorage = () => {

//   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");

//   if(getLocalItem !== undefined){

 

//   }else{

//    // console.log("i=the local storage is empty make i put something insidehinixdopd")
//   //  const newData = {...getLocalItem, personalDetails };
//     const setLocalItem = localStorageFuncs.setItemInStorage("profile", contactInformation);

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
                                         <h4 className="center">Contact Information</h4>
                                </div>
                                <div className="row">
                                      <div className="col s12 m12 l6">
                                        <label htmlFor="stateOfOrigin"><h6><span className="text">State Of Origin</span> <span className="fieldError">{validation.errors.get("stateOfOrigin")}</span></h6></label>                              
                                        <select id="stateOfOrigin" onChange={handleChange} value={contactInformation.stateOfOrigin} className="browser-default select">
                                            <option value="" />
                                            <option value={"NIGER"}>NIGER</option>
                                        </select>
                                
                                      </div>  
                                      <div className="col s12 m12 l6">
                                        <label htmlFor="lga"><h6><span className="text">LGA</span> <span className="fieldError">{validation.errors.get("lga")}</span></h6></label>                              
                                        <select id="lga" onChange={handleChange} value={contactInformation.lga} className="browser-default select" >
                                            <option value="" />
                                            <option value={"AGAIE"}>AGAIE</option>
                                            <option value={"AGWARA"}>AGWARA</option>
                                            <option value={"BIDA"}>BIDA</option>
                                            <option value={"BORGU"}>BORGU</option>
                                            <option value={"BOSSO"}>BOSSO</option>
                                            <option value={"CHANCHAGA"}>CHANCHAGA</option>
                                            <option value={"EDATI"}>EDATI</option>
                                            <option value={"GBAKO"}>GBAKO</option>
                                            <option value={"GURARA"}>GURARA</option>
                                            <option value={"KATCHA"}>KATCHA</option>
                                            <option value={"KONTAGORA"}>KONTAGORA</option>
                                            <option value={"LAPAI"}>LAPAI</option>
                                            <option value={"LAVUN"}>LAVUN</option>
                                            <option value={"MAGAMA"}>MAGAMA</option>
                                            <option value={"MARIGA"}>MARIGA</option>
                                            <option value={"MASHEGU"}>MASHEGU</option>
                                            <option value={"MOKWA"}>MOKWA</option>
                                            <option value={"MUNYA"}>MUNYA</option>
                                            <option value={"PAIKORO"}>PAIKORO</option>
                                            <option value={"RAFI"}>RAFI</option>
                                            <option value={"RIJAU"}>RIJAU</option>
                                            <option value={"SHIRORO"}>SHIRORO</option>
                                            <option value={"SULEJA"}>SULEJA</option>
                                            <option value={"TAFA"}>TAFA</option>
                                            <option value={"WUSHISHI"}>WUSHISHI</option>
                                        </select>
					                                   
                                      </div>
                                                                                     
                                </div>  


                    
                 
                                <div className="row">
                                    <div className="col s12"> 
                                        <label htmlFor="mobileNumber"><h6><span className="text">Mobie Number</span> <span className="fieldError">{validation.errors.get("mobileNumber")}</span></h6></label>                              
                                        <input id="mobileNumber"  onChange={handleChange} value={contactInformation.mobileNumber} />          
                                    </div>
  				                  
                                
                                </div>

                                <div className="row">
                                    <div className="col s12">
                                        <label htmlFor="address"><h6><span className="text">Address</span> <span className="fieldError">{validation.errors.get("address")}</span></h6></label>                              
                                        <textarea id="address" onChange={handleChange} value={contactInformation.address}></textarea>  

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
                                        <span>2/6</span>
                                    </div>
                                </div>
                         </div>

                    </div>
		        </div>
                    
              </div>

        </div>






      
  )
}


export default ContactInformation;


