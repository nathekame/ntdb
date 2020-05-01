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

const NonTeachingInformation = (props) => {


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
//   const localStorageValue = getLocalItem["nonTeachingInformation"][val]

//   console.log(" i have to trouble shoot from here "+localStorageValue);

//   if(localStorageValue !== undefined){
//   //  console.log("there is a value   -->>"+localValue);
//     return localStorageValue
//   }else{
//     return ''
//   }
// }


 const [nonTeachingInformation, setNonTeachingInformation] = useState(
              {
                // prevProfileStep:1,
                // nextProfileStep:3,
                profileStep:5,
                designation: checkInLocalStorage("nonTeachingInformation","designation"),
                schedule: checkInLocalStorage("nonTeachingInformation","schedule"),


              })


const [buttonStateF, setButtonStateF] = useState(true);
const [buttonStateB, setButtonStateB] = useState(false);
                 
let rules = {

    designation: 'required',
    schedule: 'required',  

//  email: 'required|email',
//  age: 'min:18'
};
 



let validation = new Validator(nonTeachingInformation, rules, { required: '*' });

validation.fails(); // true
validation.passes(); // false



useEffect(() => {

          if (validation.passes()) {
                  setButtonStateF(false);
                 // console.log("the   buttonStete "+buttonState);  
             }else{
              setButtonStateF(true);
            
         }
    },[nonTeachingInformation]);

// useEffect(() => {

//       if (nonTeachingInformation.profileStep === sessionProStep ) {
//               setButtonStateB(true);
//             //  console.log("the   buttonStete "+nonTeachingInformation.profileStep);  
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
                setNonTeachingInformation({ ...nonTeachingInformation, [e.target.id]: e.target.value })
            
              }


const handleForward = async e => {

    e.preventDefault();
 //   dispatch({type: 'ADD_PROFILE_DATA', payload: nonTeachingInformation});
  if (validation.passes()) { 
      dispatch({type: 'ADD_PROFILE_DATA', payload: {nonTeachingInformation: nonTeachingInformation}});
      const next = "F"
      const go = await props.updatestep(next);
      
      dispatch({type: 'CURRENT_STEP', payload: nonTeachingInformation.profileStep+1});
      if(go){
        return go
      }
    }

}

const handleBack = async e => {

    e.preventDefault();

    const next = "B"
    const go = await props.updatestep(next);
    dispatch({type: 'DELETE_WORK_DETAILS', payload: "nonTeachingInformation"});
    dispatch({type: 'CURRENT_STEP', payload: nonTeachingInformation.profileStep-1});
    if(go){
  
      return go
    }
  
}


const handleSaveNow = async e => {


  //  console.log("i am here to save first foitiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
  
    e.preventDefault();
  //  const data = {...commonData, ...uniqueData};

   // setNonTeachingInformation({ ...nonTeachingInformation, profileStep: 3 });

   //console.log("the neww contact details J "+JSON.stringify(nonTeachingInformation));

    const data = {...nonTeachingInformation,  profileStep: nonTeachingInformation.profileStep+1};
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
//     const setLocalItem = localStorageFuncs.setItemInStorage("profile", nonTeachingInformation);

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
                                         <h4 className="center">NonTeaching Information</h4>
                                </div>
                               
                                <div className="row">
                                    <div className="col s12 m12 l6">
                                        <label htmlFor="designation"><h6><span className="text">Designation</span> <span className="fieldError">{validation.errors.get("designation")}</span></h6></label>                              
                                        <input id="designation" type="text" onChange={handleChange} value={nonTeachingInformation.designation}  />                                          
                                    </div>
                                    <div className="col s12 m12 l6">
                                        <label htmlFor="schedule"><h6><span className="text">Schedule</span> <span className="fieldError">{validation.errors.get("schedule")}</span></h6></label>                              
                                        <input id="schedule" type="text" onChange={handleChange} value={nonTeachingInformation.schedule}  />                                          
                                
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


export default NonTeachingInformation;


