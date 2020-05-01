import React, { useState,useEffect, useContext } from 'react'

import moment from 'moment'


import Cookie from 'js-cookie'

import { ProfileContext } from '../../store/contexts/profileContext'
import jwtFuncs from '../../utility/jwt'

import localStorageFuncs from '../../utility/localStorage'
import logout from '../../utility/logout';

import Navbar from '../layouts/navbar'

import '../../public/assets/style.scss';
import Logout from '../../utility/logout'
import checkInLocalStorage from '../componentUtility/persistLocalToState'
import axiosFuncs from '../../utility/axios'

import Validator from 'validatorjs';


 //   const cropper = React.createRef(null);

//  const buttonStyle = {
//   backgroundColor: 'blue',
//  // backgroundImage: 'url(' + imgUrl + ')',
// };




const BioInformation = (props) => {

 // console.log("this is the passed in props +"+JSON.stringify(props));


  //const localCookie = Cookie.get('auth'); 

  //console.log("this is the local cookie from Bio Information       nnnnnn    ----->>>>>>>>>>>>> "+localCookie);


  const { dispatch } = useContext(ProfileContext);

  const currentProfile = useContext(ProfileContext);

  const profileValue = currentProfile.profile.bioInformation;

//   const bioInformation = (val) => {

//       if(val === undefined){
//           return
//       }else{
//         return val
//       }
//     }

  console.log("this is the current contect =============>>>>>>>>>>> "+JSON.stringify(currentProfile));

 // console.log("this is the current contect =============>>>>>>>>>>> "+currentProfile.profile.bioInformation.firstName);

// const checkInLocalStorage = (val) => {

//   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");
//   const localStorageValue = getLocalItem.bioInformation[val]

//   if(localStorageValue !== undefined){
//   //  console.log("there is a value   -->>"+localValue);
//     return localStorageValue
//   }else{
//     return ''
//   }
// }


  const [bioInformation, setBioInformation] = useState(
          {
          //  nextProfileStep: 2,
            profileStep:1,
            firstName: checkInLocalStorage("bioInformation","firstName"),
            otherName: checkInLocalStorage("bioInformation","otherName"),
            lastName: checkInLocalStorage("bioInformation","lastName"),
            gender: checkInLocalStorage("bioInformation","gender"),
            dob :  checkInLocalStorage("bioInformation","dob"),
            placeOfBirth: checkInLocalStorage("bioInformation","placeOfBirth"),
          
          
          }
);

const [buttonState, setButtonState] = useState(true);

                 
let rules = {

  firstName: 'required',
  // otherName: 'required|email',
  lastName: 'required',
  gender: 'required',
  dob :  'required',
  placeOfBirth: 'required',
 
//  email: 'required|email',
//  age: 'min:18'
};
 
let validation = new Validator(bioInformation, rules, { required: 'required*' });

validation.fails(); // true
validation.passes(); // false
 

// if (validation.fails()) {
//   console.log("the validation has failed thats why u see this "+validation.errors.get("firstNameame"));

//   // Error messages
// validation.errors.first('email'); // 'The email format is invalid.'
// validation.errors.get('email');

// }



useEffect(() => {


    if (validation.passes()) {
      setButtonState(false);
     // console.log("the   buttonStete "+buttonState);  
    }else{
      setButtonState(true);

    }
},[bioInformation]);






 const handleDateChange = date => {
    //setSelectedDate(date);
    setBioInformation({ ...bioInformation, dob: moment(date).format('YYYY-MM-DD') })

  };

  const  handleChange =(e) => {
    e.preventDefault(); 
    setBioInformation({ ...bioInformation, [e.target.id]: e.target.value })

  }

 const handleForward = async e => {

    e.preventDefault();

    if (validation.passes()) {    
      dispatch({type: 'ADD_PROFILE_DATA', payload: {bioInformation: bioInformation}}); 
      const next = "F";
      const go = await props.updatestep(next);
      dispatch({type: 'CURRENT_STEP', payload: bioInformation.profileStep+1});
      if(go){     
      //  console.log("all has gone well with the profile update from the props--->>>> "+props.currentStep);
        return go
      }
      
    }

  


}


const handleSaveNow = async e => {

  e.preventDefault();

 // setBioInformation({ ...bioInformation, profileStep: bioInformation.profileStep+1 });

  const data =  {...bioInformation,  profileStep: bioInformation.profileStep+1};

  console.log("the data  "+ JSON.stringify(bioInformation));

  if (validation.passes()) {  
      let api = await axiosFuncs.profilePost(data);
      if(api.data === "error" ){
        console.log("the log is error");
      }
      if (api.data === "success") {
        console.log("the log is success"+api.status);
        // router.push('/account')
      }
      dispatch({type: 'CLEAR_CONTEXT'});
      Logout();

  }else{
    dispatch({type: 'CLEAR_CONTEXT'});
    Logout();
  }
 


  

 // props.createProfile(props.stateData);
 

//  logout();

}




const persistToLocalStorage = () => {

  const getLocalItem = localStorageFuncs.getItemFromStorage("profile");

  if(getLocalItem !== undefined){

 

  }else{

   // console.log("i=the local storage is empty make i put something insidehinixdopd")
  //  const newData = {...getLocalItem, bioInformation };
    const setLocalItem = localStorageFuncs.setItemInStorage("profile", bioInformation);

    return setLocalItem;

  }

}




useEffect(() => {
  // set local storage

  //console.log("this is the use effect running up and downnnnnnn   nooooooooooooowwwwwwwwwwww")
 // dispatch({type: 'CLEAR_DATA'});

  persistToLocalStorage();
  // persistToState();
  // checkLocalStorage("firstName");
})



  return (

    <div className="pagegrid">
      
    <Navbar />
        <div className="innergrid">

            <div className="profile-form" >

                  <h3>Bio Information </h3>

                  <div className="three-column-row">
                    
                        <div className="column">
                        
                          <label htmlFor="firstName">First Name  <span className="fieldError">{validation.errors.get("firstName")}</span></label> 
                          <input className="firstName" id="firstName" onChange={handleChange}  value={bioInformation.firstName} />
                
                        </div> 
                        <div className="column">
                          <label htmlFor="otherName">Other Name </label>
                          <input id="otherName" onChange={handleChange} value={bioInformation.otherName}  />
                         
                        </div> 
                        <div className="column">
                          <label htmlFor="lastName">Last Name  <span className="fieldError">{validation.errors.get("lastName")}</span></label>
                          <input id="lastName" onChange={handleChange} value={bioInformation.lastName}  />
                         
                        </div>
                   
                  </div>

                  <div className="three-column-row">
                      <div className="column">
                          <label htmlFor="gender">Gender  <span className="fieldError">{validation.errors.get("gender")}</span></label>
                          <select id="gender" onChange={handleChange} value={bioInformation.gender}  >
                              <option value="" />
                              <option value={"Male"}>Male</option>
                              <option value={"Female"}>Female</option>
                          </select>
                      </div>
                      <div className="column">
                          <label htmlFor="dob">Date Of Birth  <span className="fieldError">{validation.errors.get("dob")}</span></label>
                          <input id="dob" type="date" onChange={handleDateChange} value={bioInformation.dob}  />
                      </div>
                      <div className="column">
                          <label htmlFor="placeOfBirth">Place Of Birth  <span className="fieldError">{validation.errors.get("placeOfBirth")}</span></label>
                          <input id="placeOfBirth" onChange={handleChange} value={bioInformation.placeOfBirth}  />
                      </div>
                  </div>

                  

                  <div className="two-column-row">
                      <div className="column">
                         <button  size="small" color="primary" onClick={handleSaveNow}>Save And Logout</button>
                      </div>
                      <div className="column">
                         <button size="small" color="primary" disabled={buttonState} onClick={handleForward}>Next</button>
                      </div>
                  </div>

                  <div className="one-column-row">
                      <div className="column componentFooter">
                         <span>1/6</span>
                      </div>
                  </div>

              </div>

              </div>
              
     

    </div>


  )
}


export default BioInformation;



