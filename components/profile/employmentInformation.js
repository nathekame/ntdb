import React, { useState,useEffect, useContext } from 'react'

import { ProfileContext } from '../../store/contexts/profileContext'

import Navbar from '../layouts/navbar'

import '../../public/assets/style.scss';
import Logout from '../../utility/logout'
import checkInLocalStorage from '../componentUtility/persistLocalToState';
import axiosFuncs from '../../utility/axios';

import moment from 'moment'
import Validator from 'validatorjs';
import Cookie from 'js-cookie'
import jwtFuncs from '../../utility/jwt';
import composeApiData from '../componentUtility/composeApiData';


//import localStorageFuncs from '../../../utility/localStorage'



 //   const cropper = React.createRef(null);

const EmploymentInformation = (props) => {


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
//   const localStorageValue = getLocalItem["employmentInformation"][val]

//   console.log(" i have to trouble shoot from here "+localStorageValue);

//   if(localStorageValue !== undefined){
//   //  console.log("there is a value   -->>"+localValue);
//     return localStorageValue
//   }else{
//     return ''
//   }
// }





 const [employmentInformation, setEmploymentInformation] = useState(
              {
                // prevProfileStep:1,
                // nextProfileStep:3,
                profileStep:4,
                controlNumber: checkInLocalStorage("employmentInformation","controlNumber"),
                highestQualification: checkInLocalStorage("employmentInformation", "highestQualification"),
                lgea: checkInLocalStorage("employmentInformation", "lgea"),
                station: checkInLocalStorage("employmentInformation","station"),
                dateOfFirstAppointment: checkInLocalStorage("employmentInformation","dateOfFirstAppointment"),
                dateOfConfirmation: checkInLocalStorage("employmentInformation","dateOfConfirmation"),
                dateOfLastPromotion: checkInLocalStorage("employmentInformation","dateOfLastPromotion")


              })


const [buttonStateF, setButtonStateF] = useState(true);
const [buttonStateB, setButtonStateB] = useState(false);
                 
let rules = {

  controlNumber: 'required',
  highestQualification: 'required',
  lgea: 'required',
  station: 'required',
  dateOfFirstAppointment: 'required',
  dateOfConfirmation: 'required',
  dateOfLastPromotion: 'required'



//  email: 'required|email',
//  age: 'min:18'
};
 
let validation = new Validator(employmentInformation, rules, { required: 'required*' });

validation.fails(); // true
validation.passes(); // false



useEffect(() => {

          if (validation.passes()) {
            console.log("the validation has assed ");  

                  setButtonStateF(false);
             }else{
              setButtonStateF(true);
            
         }
    },[employmentInformation]);

// useEffect(() => {

//       if (employmentInformation.profileStep === sessionProStep ) {
//               setButtonStateB(true);
//             //  console.log("the   buttonStete "+employmentInformation.profileStep);  
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
                setEmploymentInformation({ ...employmentInformation, [e.target.id]: e.target.value })
            
              }


 const handleDateChange = (e, date) => {
    //setSelectedDate(date);
    setEmploymentInformation({ ...employmentInformation, [e.target.id]: moment(date).format('YYYY-MM-DD') })

  };


const handleForward = async e => {

    e.preventDefault();
 //   dispatch({type: 'ADD_PROFILE_DATA', payload: employmentInformation});
  if (validation.passes()) { 
      dispatch({type: 'ADD_PROFILE_DATA', payload: {employmentInformation: employmentInformation}});
      const next = "F"
      const go = await props.updatestep(next);
      dispatch({type: 'CURRENT_STEP', payload: employmentInformation.profileStep+1});
      if(go){
        return go
      }
    }

}

const handleBack = async e => {

    e.preventDefault();

    const next = "B"
    const go = await props.updatestep(next);
    dispatch({type: 'CURRENT_STEP', payload: employmentInformation.profileStep-1});
    if(go){
  
      return go
    }
  
}


// const handleSaveNow = async e => {

//     e.preventDefault();
//   //  const data = {...commonData, ...uniqueData};


//     const data = {...employmentInformation,  profileStep: employmentInformation.profileStep+1};
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
//     const setLocalItem = localStorageFuncs.setItemInStorage("profile", employmentInformation);

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

     <div className="pagegrid">
      <Navbar />

        <div className="innergrid">

            <div className="profile-form" >

            <h3> Employment Information </h3>

            <div className="two-column-row">
                  <div className="column">
                    <label htmlFor="controlNumber">Address   <span className="fieldError">{validation.errors.get("controlNumber")}</span></label>               
                    <input id="controlNumber"  onChange={handleChange} value={employmentInformation.controlNumber} />                 
                  </div>

                      <div className="column">
                          <label htmlFor="highestQualification">Highest Qualification <span className="fieldError">{validation.errors.get("highestQualification")}</span></label>
                          <input id="highestQualification"  onChange={handleChange} value={employmentInformation.highestQualification} />        
                     
                      </div>
            </div>

            <div className="two-column-row">
                      <div className="column">
                          <label htmlFor="lgea">LGEA   <span className="fieldError">{validation.errors.get("lgea")}</span></label>
                          <select id="lgea" onChange={handleChange} value={employmentInformation.lgea} >
                              <option value="" />
                              <option value={"DELTA"}>DELTA</option>
                              <option value={"KANO"}>KANO</option>
                              <option value={"RIVERS"}>RIVERS</option>
                          </select>
                      </div>
                      <div className="column">
                          <label htmlFor="station">Station/School Name  <span className="fieldError">{validation.errors.get("station")}</span></label>
                          <select id="station" onChange={handleChange} value={employmentInformation.station} >
                              <option value="" />
                              <option value={"DELTA"}>DELTA</option>
                              <option value={"KANO"}>KANO</option>
                              <option value={"RIVERS"}>RIVERS</option>
                          </select>
                      </div>
            </div>

            <div className="three-column-row">
                     <div className="column">
                          <label htmlFor="dateOfFirstAppointment">Date of First Appointment  <span className="fieldError">{validation.errors.get("dateOfFirstAppointment")}</span></label>
                          <input id="dateOfFirstAppointment" type="date" onChange={handleDateChange} value={employmentInformation.dateOfFirstAppointment}  />
                      </div> 
                      <div className="column">
                          <label htmlFor="dateOfConfirmation">Date of Confirmation <span className="fieldError">{validation.errors.get("dateOfConfirmation")}</span></label>
                          <input id="dateOfConfirmation" type="date" onChange={handleDateChange} value={employmentInformation.dateOfConfirmation}  />
                      </div> 
                      <div className="column">
                          <label htmlFor="dateOfLastPromotion">Date Of Last Promotion  <span className="fieldError">{validation.errors.get("dateOfLastPromotion")}</span></label>
                          <input id="dateOfLastPromotion" type="date" onChange={handleDateChange} value={employmentInformation.dateOfLastPromotion}  />
                      </div>
           
            </div>

      

            <div className="two-column-row">
                 <div className="column">
                         <button variant="outlined"   size="small" color="primary" disabled={buttonStateB} onClick={handleBack}>	Back </button>
                      </div>
                
                      <div className="column">
                         <button size="small" color="primary"  disabled={buttonStateF} onClick={handleForward}>Next</button>
                      </div>
                  </div>

                  <div className="one-column-row">
                      <div className="column componentFooter">
                         <span>4/6</span>
                      </div>
                  </div>

            </div>
        </div>
    </div>



      
  )
}


export default EmploymentInformation;











