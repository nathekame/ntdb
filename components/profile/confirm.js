import React, { useState, useContext } from 'react'
import checkInLocalStorage from '../componentUtility/persistLocalToState';
import { ProfileContext } from '../../store/contexts/profileContext';

import { useRouter } from 'next/router'

import moment from 'moment'

//import { Eclipse } from "react-loading-io";


import Navbar from '../layouts/navbar'
// import Staff from '../partials/profile/staff';
// import Corper from '../partials/profile/corper';
// import Student from '../partials/profile/student';
// import Worker from '../partials/profile/worker';
 import axiosFuncs from '../../utility/axios';
 import composeApiData from '../componentUtility/composeApiData';
import Success from './success';

import 'materialize-css/dist/css/materialize.min.css'



 //   const cropper = React.createRef(null);

const Confirm = (props) => {

  
  const router = useRouter();


  const profileData = useContext(ProfileContext);

 // console.log("this is the profile details from the COtext "+JSON.stringify(profileData));


  const { dispatch } = useContext(ProfileContext);

  const [myProfileDetails ] = useState(
    {
      profileStep: 8,
      isProfileComplete: 1,

      firstName: checkInLocalStorage("bioInformation","firstName"),
      otherName: checkInLocalStorage("bioInformation","otherName"),
      lastName: checkInLocalStorage("bioInformation","lastName"),
      gender: checkInLocalStorage("bioInformation","gender"),
      dob :  checkInLocalStorage("bioInformation","dob"),
      placeOfBirth: checkInLocalStorage("bioInformation","placeOfBirth"),

      stateOfOrigin: checkInLocalStorage("contactInformation","stateOfOrigin"),
      lga: checkInLocalStorage("contactInformation", "lga"),
      address: checkInLocalStorage("contactInformation", "address"),
      controlNumber: checkInLocalStorage("contactInformation","controlNumber"),
      mobileNumber: checkInLocalStorage("contactInformation","mobileNumber"),

      fullName: checkInLocalStorage("nextOfKinInformation","fullName"),
      relationship: checkInLocalStorage("nextOfKinInformation", "relationship"),
      address: checkInLocalStorage("nextOfKinInformation", "address"),
      emailAddress: checkInLocalStorage("nextOfKinInformation","emailAddress"),
      mobileNumber: checkInLocalStorage("nextOfKinInformation","mobileNumber"),

      controlNumber: checkInLocalStorage("employmentInformation","controlNumber"),
      highestQualification: checkInLocalStorage("employmentInformation", "highestQualification"),
      lgea: checkInLocalStorage("employmentInformation", "lgea"),
      station: checkInLocalStorage("employmentInformation","station"),
      dateOfFirstAppointment: checkInLocalStorage("employmentInformation","dateOfFirstAppointment"),
      dateOfConfirmation: checkInLocalStorage("employmentInformation","dateOfConfirmation"),
      dateOfLastPromotion: checkInLocalStorage("employmentInformation","dateOfLastPromotion"),

      bankName: checkInLocalStorage("paymentInformation", "bankName"),
      accountName:checkInLocalStorage("paymentInformation", "accountName"),
      accountNumber:checkInLocalStorage("paymentInformation", "accountNumber"),
      bvn: checkInLocalStorage("paymentInformation", "bvn")

    
    }
);

const [ loading, setLoading ] = useState(false);






const handleSaveNow = async (e) => {

    e.preventDefault();

    setLoading(true);

    const commonData = myProfileDetails;

    const profilePicData = profileData.profile.profilePic.profilePicFile;

    const filesToCompose = {
      profilePicFile: profilePicData

    }
   // console.log("this i s the file to comeose "+JSON.stringify(filesToCompose));


    let dataToCompose = commonData;
  //  dataToCompose.profilePic = profilePicData;

    


    const dataCompose = composeApiData.composeFullProfileData(dataToCompose, filesToCompose);

  //  console.log("this is the data going out "+JSON.stringify(data));

    // const sData = JSON.stringify(data);

    // console.log("the data to send in to the db "+sData);

   // const fData = new FormData();
   // const dataValue = profileData.profile.profilePic.profilePicFile;
    // const idCardFile = uniqueData.idCardFile;
    // const profilePicFile = profileData.profile.profilePic.profilePicFile;

   // const dataToSend = fData.append('image', dataValue);

    // const formData = new FormData();   
    // formData.append('firstName', commonData.firstName);
    // formData.append('idCardFile', idCardFile);
    // formData.append('profilePic', profilePicFile);
    
  

    // var details = JSON.stringify({age: 12});
    // form.append('details', details);

    // console.log("this is the complete doen data "+idCardFile);

    // console.log("the for id card file "+formData.get("idCardFile"));
    // console.log("this is the profile pic "+formData.get("profiePic"));

   // let api = await axiosFuncs.profilePost(dataToSend);
   let api = await axiosFuncs.profilePost(dataCompose);
   console.log("this is the status "+api.status);
    if(api.data === "error" ){
      console.log("the log is error");
      setLoading(false);
      router.push('/profile');
     }
    if (api.status === 201) {
      console.log("the log is success"+api.status);

      // const next = "END";
      // const go = await props.updatestep(next);
      // if(go){
      //   setLoading(false);

      // }
      
    
     router.push('/success');
      
      
      
    }
    //  console.log("this is the complete "+JSON.stringify(api));

    //console.log("this is the retunred status "+api.config.data);


  
  }


 const handleBack = e => {
 
  e.preventDefault();
  const next = "B"
  const go = props.updatestep(next);
  // dispatch({type: 'DELETE_WORK_DETAILS', payload: "workerDetails"});
   dispatch({type: 'CURRENT_STEP', payload: myProfileDetails.profileStep-1});
   if(go){
     return go
   }

}


if (loading === true) {
  return (

         <div className="pagegrid">
              <div className="innergrid">
                  <div className="successContainer" >
                         {/* <Eclipse size={100} color="black" />; */}
                         <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                          <h3>Creating Your Profile...</h3>
                  </div>  
              </div>
          </div>
  )


} else {
  
  

  return (




            <div className="container">
                        
                        <div className="row">      
                    
                            
                             

                                  <div className="profileForm">


                                      <div className="formPadding z-depth-1">
                                        
                                          <div className="row">
                                                  <h4 className="center">Profile Preview</h4>
                                          </div>
                                          <div className="row">
                                                <div className="col s12">
                                                    <div className="profilePicPreview"><img className="responsive-img formLogo" src={profileData.profile.profilePic.profilePicUrl} alt="profilePic" height="70px" width="200px"/></div>
                                                </div>
                                          </div>
                                          <div className="row">

                                                 

                                                  <div className="card-panel">
                                                    <h3>Bio Information</h3>
                                                    <div className="row">
                                                        
                                                        <div className="col s4"> 
                                                          <label htmlFor="firstName"><h6><span className="text">First Name:</span></h6></label>
                                                          <span id="firstName">{myProfileDetails.firstName}</span>
                                                        </div>
                                                        <div className="col s4">
                                                          <label htmlFor="otherName"><h6><span className="text">Other Name:</span></h6></label>
                                                          <span id="otherName">{myProfileDetails.otherName}</span>                                  
                                                        </div>
                                                        <div className="col s4"> 
                                                          <label htmlFor="lastName"><h6><span className="text">Last Name:</span></h6></label>
                                                          <span id="lastName">{myProfileDetails.lastName}</span>                                  
                                   
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col s4">
                                                              <label htmlFor="gender"><h6><span className="text">Gender:</span></h6></label>
                                                              <span id="gender">{myProfileDetails.gender}</span>
                                                        </div>
                                                        <div className="col s4">
                                                              <label htmlFor="dob"><h6><span className="text">Date Of Birth:</span></h6></label>
                                                              <span id="dob">{myProfileDetails.dob}</span>
                                                        </div>
                                                        <div className="col s4">
                                                              <label htmlFor="placeOfBirth"><h6><span className="text">Place Of Birth:</span></h6></label>
                                                              <span id="placeOfBirth">{myProfileDetails.placeOfBirth}</span>
                                                        </div>
                                                    </div>


                                                  </div>

                                                  <div className="card-panel">
                                                    <h3>Contact Information</h3>
                                                    <div className="row">
                                                       
                                                        <div className="col s6"> 
                                                          <label htmlFor="stateOfOrigin"><h6><span className="text">State Of Origin:</span></h6></label>
                                                          <span id="stateOfOrigin">{myProfileDetails.stateOfOrigin}</span>
                                                        </div>
                                                        <div className="col s6">
                                                          <label htmlFor="lga"><h6><span className="text">LGA:</span></h6></label>
                                                          <span id="lga">{myProfileDetails.lga}</span>                                  
                                                        </div>
                                                    
                                                    </div>

                                                    <div className="row">
                                                       
                                                       <div className="col s6"> 
                                                         <label htmlFor="email"><h6><span className="text">Email:</span></h6></label>
                                                         <span id="email">{myProfileDetails.email}</span>
                                                       </div>
                                                       <div className="col s6">
                                                         <label htmlFor="mobileNumber"><h6><span className="text">Mobile Number:</span></h6></label>
                                                         <span id="mobileNumber">{myProfileDetails.mobileNumber}</span>                                  
                                                       </div>
                                                   
                                                    </div>

                                                    <div className="row">
                                                       
                                                      <div className="col s12"> 
                                                         <label htmlFor="address"><h6><span className="text">Address:</span></h6></label>
                                                         <span id="address">{myProfileDetails.address}</span>                                  
                                                      </div>
                                                   
                                                    </div>

                                                </div>

                                                <div className="card-panel">
                                                    <h3>Guarantor Information</h3>
                                                    <div className="row">

                                                    </div>

                                                </div>

                                                <div className="card-panel">
                                                    <h3>Employment Information</h3>
                                                    <div className="row">
                                                        <div className="col s6"> 
                                                          <label htmlFor="controlNumber"><h6><span className="text">Control Number:</span></h6></label>
                                                          <span id="controlNumber">{myProfileDetails.controlNumber}</span>
                                                        </div>
                                                        <div className="col s6">
                                                          <label htmlFor="highestQualification"><h6><span className="text">Highest Qualification:</span></h6></label>
                                                          <span id="highestQualification">{myProfileDetails.highestQualification}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col s6"> 
                                                          <label htmlFor="lgea"><h6><span className="text">LGEA:</span></h6></label>
                                                          <span id="lgea">{myProfileDetails.controlNumber}</span>
                                                        </div>
                                                        <div className="col s6">
                                                          <label htmlFor="station"><h6><span className="text">Station:</span></h6></label>
                                                          <span id="station">{myProfileDetails.station}</span>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                          <div className="col s4">
                                                                <label htmlFor="dateOfFirstAppointment"><h6><span className="text">Date Of First Appointment:</span></h6></label>
                                                                <span id="dateOfFirstAppointment">{myProfileDetails.dateOfFirstAppointment}</span>
                                                          </div>
                                                          <div className="col s4">
                                                                <label htmlFor="dateOfConfirmation"><h6><span className="text">Date Of Confirmation:</span></h6></label>
                                                                <span id="dateOfConfirmation">{myProfileDetails.dateOfConfirmation}</span>
                                                          </div>
                                                          <div className="col s4">
                                                                <label htmlFor="dateOfLastPromotion"><h6><span className="text">Date Of Last Promotion</span></h6></label>
                                                                <span id="dateOfLastPromotion">{myProfileDetails.dateOfLastPromotion}</span>
                                                          </div>
                                                  
                                                  


                                                </div>


                                                <div className="card-panel">
                                                    <h3>Payment Information</h3>
                                                    <div className="row">
                                                   
                                                        <div className="col s3">
                                                          <label htmlFor="bankName"><h6><span className="text">Bank Name:</span></h6></label>
                                                          <span id="bankName">{myProfileDetails.bankName}</span>
                                                        </div>
                                                        <div className="col s3">
                                                          <label htmlFor="accountName"><h6><span className="text">Account Name:</span></h6></label>
                                                          <span id="accountName">{myProfileDetails.accountName}</span>
                                                        </div>
                                                        <div className="col s3">
                                                          <label htmlFor="accountNumber"><h6><span className="text">Account Number:</span></h6></label>
                                                          <span id="accountNumber">{myProfileDetails.accountNumber}</span>
                                                        </div>
                                                        <div className="col s3">
                                                          <label htmlFor="bvn"><h6><span className="text">BVN:</span></h6></label>
                                                          <span id="bvn">{myProfileDetails.bvn}</span>
                                                        </div>
                                                
                                                    </div>

                                                </div>
                                         
                                          </div>  
                              

                                          <div className="row">
                                              <div className="col s6"> 
                                                <button className="button black" onClick={handleBack}>Back </button>     
                                              </div>
                                              <div className="col s6"> 
                                                <button className="button black"  onClick={handleSaveNow}>My Details Are Fine Save Now</button>
                                              </div>
                                          </div>

                                      </div>

                              </div>
                            </div>
                              
                        

                  </div>

        </div>


      )

  }
}


export default Confirm;



