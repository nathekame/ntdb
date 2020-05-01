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
                highestQualification: checkInLocalStorage("employmentInformation", "highestQualification"),
                lgea: checkInLocalStorage("employmentInformation", "lgea"),
                station: checkInLocalStorage("employmentInformation","station"),
                staffCategory: checkInLocalStorage("employmentInformation","staffCategory"),
                dateOfFirstAppointment: checkInLocalStorage("employmentInformation","dateOfFirstAppointment"),
                appointmentLetterUrl: '',
                appointmentLetterFile: '',
                dateOfConfirmation: checkInLocalStorage("employmentInformation","dateOfConfirmation"),
                confirmationLetterUrl: '',
                confirmationLetterFile: '',
                dateOfLastPromotion: checkInLocalStorage("employmentInformation","dateOfLastPromotion"),
                lastPromotionLetterUrl: '',
                lastPromotionLetterFile: '',
                gradeLevel: checkInLocalStorage("employmentInformation","gradeLevel"),
                step: checkInLocalStorage("employmentInformation","step"),
               

                
              })

              
const userCat = useState(true);

const [buttonStateF, setButtonStateF] = useState(true);
const [buttonStateB, setButtonStateB] = useState(false);
                 
let rules = {

 // controlNumber: 'required|alpha_num',
  highestQualification: 'required',
  lgea: 'required',
  station: 'required',
  staffCategory: 'required',
  dateOfFirstAppointment: 'required',
  dateOfConfirmation: 'required',
  dateOfLastPromotion: 'required',

  appointmentLetterUrl: 'required',
  appointmentLetterFile: 'required',
  confirmationLetterUrl: 'required',
  confirmationLetterFile: 'required',
  lastPromotionLetterUrl: 'required',
  lastPromotionLetterFile: 'required',

  gradeLevel: 'required',
  step: 'required',


 



//  email: 'required|email',
//  age: 'min:18'
};
 
let validation = new Validator(employmentInformation, rules, { required: '*' });

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



const handleAppointmentFile = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let elementFile = e.target.files[0];
  //  let elementID = [e.target.id];
    reader.onloadend = () => {    
            setEmploymentInformation({ ...employmentInformation, appointmentLetterFile: elementFile, appointmentLetterUrl: reader.result })  

    }
  
    reader.readAsDataURL(elementFile)
  }

  const handleConfirmationFile = (e)=>{

        e.preventDefault();

        let reader = new FileReader();
        let elementFile = e.target.files[0];
    //  let elementID = [e.target.id];
        reader.onloadend = () => {    
            setEmploymentInformation({ ...employmentInformation, confirmationLetterFile: elementFile, confirmationLetterUrl: reader.result })  

        }
    
        reader.readAsDataURL(elementFile)

       
  
   

  }

  const handleLastPromoFile =(e)=>{


        e.preventDefault();

        let reader = new FileReader();
        let elementFile = e.target.files[0];
    //  let elementID = [e.target.id];
        reader.onloadend = () => {    
            setEmploymentInformation({ ...employmentInformation, lastPromotionLetterFile: elementFile, lastPromotionLetterUrl: reader.result })  

        }

        reader.readAsDataURL(elementFile)

  }



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


                <div className="container">
                    
                    <div className="row">      
                
                        
                            <div className="">

                                 <div className="profileForm">


                                    <div className="formPadding z-depth-2">
                                    
                                        <div className="row">
                                                <h4 className="center">Employment Information</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col s12 m12 l4">
                                                <label htmlFor="lgea"><h6><span className="text">LGEA</span> <span className="fieldError">{validation.errors.get("lgea")}</span></h6></label>                              
                                                <select id="lgea" onChange={handleChange} value={employmentInformation.lgea} className="browser-default select"  >
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
                                            <div className="col s12 m12 l4">
                                                    <label htmlFor="station"><h6><span className="text">Station/School</span> <span className="fieldError">{validation.errors.get("station")}</span></h6></label>                              
                                                    <select id="station" onChange={handleChange} value={employmentInformation.station} className="browser-default select"  >
                                                        <option value="" />
                                                        <option value={"DELTA"}>DELTA</option>
                                                        <option value={"KANO"}>KANO</option>
                                                        <option value={"RIVERS"}>RIVERS</option>
                                                    </select>                
                                            </div>
                                            <div className="col s12 m12 l4">
                                                    <label htmlFor="highestQualification"><h6><span className="text">Highest Qualification</span> <span className="fieldError">{validation.errors.get("highestQualification")}</span></h6></label>                              
                                                    <input id="highestQualification"  onChange={handleChange} value={employmentInformation.highestQualification} />        
                                    
                                            </div>                                                  
                                        </div>  
                        
                                       
                                        <div className="row">
                                            <div className="col s12 m12 l6"> 
                                                <label htmlFor="dateOfFirstAppointment"><h6><span className="text">Date of First Appointment</span> <span className="fieldError">{validation.errors.get("dateOfFirstAppointment")}</span></h6></label>                              
                                                <input id="dateOfFirstAppointment" type="date" onChange={handleDateChange} value={employmentInformation.dateOfFirstAppointment}  />                                              
                                            </div>
                                            <div className="col s12 m12 l6"> 
                                                <label htmlFor="appointmentLetter"><h6><span className="text">Upload First Appointment Letter</span> <span className="fieldError">{validation.errors.get("appointmentLetter")}</span></h6></label>                              
                                                <input  type='file' id="appointmentLetter" onChange={(e)=>handleAppointmentFile(e)} />
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col s12 m12 l6">
                                                <label htmlFor="dateOfConfirmation"><h6><span className="text">Date of Confirmation</span> <span className="fieldError">{validation.errors.get("dateOfConfirmation")}</span></h6></label>                              
                                                <input id="dateOfConfirmation" type="date" onChange={handleDateChange} value={employmentInformation.dateOfConfirmation}  />                                           
                                            </div>
                                            <div className="col s12 m12 l6">
                                                <label htmlFor="confirmationLetter"><h6><span className="text">Upload Confirmation Letter</span> <span className="fieldError">{validation.errors.get("confirmationLetter")}</span></h6></label>                              
                                                <input  type='file' id="confirmationLetter" onChange={(e)=>handleConfirmationFile(e)} />    
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col s12 m12 l6">
                                                <label htmlFor="dateOfLastPromotion"><h6><span className="text">Date Of Last Promotion</span> <span className="fieldError">{validation.errors.get("dateOfLastPromotion")}</span></h6></label>                              
                                                <input id="dateOfLastPromotion" type="date" onChange={handleDateChange} value={employmentInformation.dateOfLastPromotion}  />                                          
                                            </div>
                                            <div className="col s12 m12 l6">
                                                <label htmlFor="lastPromotionLetter"><h6><span className="text">Upload Last Promotion Letter</span> <span className="fieldError">{validation.errors.get("lastPromotionLetter")}</span></h6></label>                              
                                                <input  type='file' id="lastPromotionLetter" onChange={(e)=>handleLastPromoFile(e)} />   
                                            </div>
                                        </div>
                                       

                                        <div className="row">
                                            <div className="col s12 m12 l4"> 
                                                <label htmlFor="staffCategory"><h6><span className="text">Staff Category</span> <span className="fieldError">{validation.errors.get("staffCategory")}</span></h6></label>                              
                                                <select id="staffCategory" onChange={handleChange} value={employmentInformation.staffCategory} className="browser-default select">
                                                    <option value="" />
                                                    <option value={"Teaching"}>Teaching</option>
                                                    <option value={"Non Teaching"}>No Teaching</option>  
                                                </select>  
                                            </div>
                                            <div className="col s12 m12 l4">
                                                <label htmlFor="gradeLevel"><h6><span className="text">Grade Level</span> <span className="fieldError">{validation.errors.get("gradeLevel")}</span></h6></label>                              
                                                <select id="gradeLevel" onChange={handleChange} value={employmentInformation.gradeLevel} className="browser-default select"  >
                                                        <option value="" />
                                                        <option value={"07"}>07</option>
                                                        <option value={"08"}>08</option>
                                                        <option value={"09"}>09</option>
                                                </select>
                                            </div>
                                            <div className="col s12 m12 l4">
                                                <label htmlFor="step"><h6><span className="text">Step</span> <span className="fieldError">{validation.errors.get("step")}</span></h6></label>                              
                                                <select id="step" onChange={handleChange} value={employmentInformation.step} className="browser-default select"  >
                                                        <option value="" />
                                                        <option value={"01"}>01</option>
                                                        <option value={"02"}>02</option>
                                                        <option value={"03"}>03</option>
                                                </select>
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
                                                <span>4/6</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                         </div>
                            
                    </div>

                </div>


      
  )
}


export default EmploymentInformation;











