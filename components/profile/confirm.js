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
                         <h3>Creating Your Profile...</h3>
                  </div>  
              </div>
          </div>
  )


} else {
  
  

  return (


    <div className="confirmationPage">
      <Navbar />

        <div className="innergrid">

            <div className="profile-form" >

            

            <div className="profileGroup">
                <div className="one-column-row">
                          <div className="column">
                            <div className="profilePicPreview"><img src={profileData.profile.profilePic.profilePicUrl} alt="profilePic" height="70px" width="200px"/></div>
                          </div>
                </div>
                <div className="one-column-row">
                          <div className="column">
                            <div className="profilePicPreview">

                               <h1>My Profile Preview</h1>
                          </div>
                          </div>
                </div>
            </div>


            <div className="profileGroup">
                    <h3>Bio Information</h3>
                    <div className="three-column-row">
                    
                    <div className="column">
                          <label htmlFor="firstName">First Name: </label>
                          <span id="firstName">{myProfileDetails.firstName}</span>
                    </div>
                    <div className="column">
                          <label htmlFor="otherName">Other Name: </label>
                          <span id="otherName">{myProfileDetails.otherName}</span>
                    </div>
                    <div className="column">
                          <label htmlFor="lastName">Last Name: </label>
                          <span id="lastName">{myProfileDetails.lastName}</span>
                    </div>
               
              </div>

              <div className="three-column-row">
                    <div className="column">
                          <label htmlFor="gender">Gender: </label>
                          <span id="gender">{myProfileDetails.gender}</span>
                    </div>
                    <div className="column">
                          <label htmlFor="dob">Date Of Birth: </label>
                          <span id="dob">{myProfileDetails.dob}</span>
                    </div>
                    <div className="column">
                          <label htmlFor="placeOfBirth">Place Of Birth: </label>
                          <span id="placeOfBirth">{myProfileDetails.placeOfBirth}</span>
                    </div>
              </div>


            </div>
        

            <div className="profileGroup">
                <h3>Contact Information</h3>


                <div className="three-column-row">
                      <div className="column ">
                              <label htmlFor="stateOfOrigin">State of Origin: </label>
                              <span id="stateOfOrigin">{myProfileDetails.stateOfOrigin}</span>
                      </div>
                      <div className="column ">
                     
                      </div>
                      <div className="column ">
                              <label htmlFor="lga">LGA: </label>
                              <span id="lga">{myProfileDetails.lga}</span>
                      </div>
            </div>

            <div className="three-column-row">
                  <div className="column">
                              <label htmlFor="controlNumber">Control Number: </label>
                              <span id="controlNumber">{myProfileDetails.controlNumber}</span>
                  </div>
                  <div className="column ">
                     
                     </div>
                  <div className="column">
                              <label htmlFor="mobileNumber">Mobile Number: </label>
                              <span id="mobileNumber">{myProfileDetails.mobileNumber}</span>
                  </div>
            </div>

            <div className="one-column-row">
                  <div className="column">
                              <label htmlFor="address">Address: </label>
                              <span id="controlNumber">{myProfileDetails.address}</span>
                  </div>
            </div>



            </div>
           
            <div className="profileGroup">
              <h3>Next Of Kin Information</h3>



              <div className="three-column-row">
                       <div className="column">
                              <label htmlFor="fullName">Full Name: </label>
                              <span id="fullName">{myProfileDetails.fullName}</span>
                       </div>
                       <div className="column ">
                     
                     </div>
                       <div className="column">
                              <label htmlFor="relationship">Relationship: </label>
                              <span id="relationship">{myProfileDetails.relationship}</span>
                       </div>
            </div>

            <div className="three-column-row">
                  <div className="column">
                          <label htmlFor="emailAddress">Email Address: </label>
                          <span id="emailAddress">{myProfileDetails.emailAddress}</span>
                   </div>
                   <div className="column ">
                     
                     </div>
                   <div className="column">
                        <label htmlFor="mobileNumber">Mobile Number: </label>
                        <span id="mobileNumber">{myProfileDetails.mobileNumber}</span>
                    </div>
            </div>

            <div className="one-column-row">
                   <div className="column">
                        <label htmlFor="address">Address: </label>
                        <span id="address">{myProfileDetails.address}</span>
                     </div>
           
            </div>



            </div>


            <div className="profileGroup">
               <h3>Employment information</h3>

               <div className="three-column-row">
                      <div className="column">
                            <label htmlFor="controlNumber">Control Number: </label>
                            <span id="controlNumber">{myProfileDetails.controlNumber}</span>
                      </div>
                      <div className="column ">
                     
                     </div>

                      <div className="column">
                            <label htmlFor="highestQualification">Highest Qualification: </label>
                            <span id="highestQualification">{myProfileDetails.highestQualification}</span>
                      </div>
            </div>

            <div className="three-column-row">
                      <div className="column">
                            <label htmlFor="lgea">LGEA: </label>
                            <span id="lgea">{myProfileDetails.lgea}</span>
                      </div>
                      <div className="column ">
                     
                     </div>
                      <div className="column">
                            <label htmlFor="station">Station: </label>
                            <span id="station">{myProfileDetails.station}</span>
                      </div>
            </div>

            <div className="three-column-row">
                      <div className="column">
                            <label htmlFor="dateOfFirstAppointment">Highest Qualification: </label>
                            <span id="dateOfFirstAppointment">{myProfileDetails.dateOfFirstAppointment}</span>
                      </div>
                      <div className="column">
                            <label htmlFor="dateOfConfirmation">Date Of Confirmation: </label>
                            <span id="dateOfConfirmation">{myProfileDetails.dateOfConfirmation}</span>
                      </div>
                      <div className="column">
                            <label htmlFor="dateOfLastPromotion">Date Of Last Promotion: </label>
                            <span id="dateOfLastPromotion">{myProfileDetails.dateOfLastPromotion}</span>
                      </div>
           
            </div>

      

              </div>

            <div className="profileGroup">
               <h3>Payment Information</h3>

                    <div className="four-column-row">
                              <div className="column">
                                <label htmlFor="bankName">Bank Name: </label>
                                <span id="bankName">{myProfileDetails.bankName}</span>
                              </div>
                              <div className="column">
                                <label htmlFor="accountName">Account Name: </label>
                                <span id="accountName">{myProfileDetails.accountName}</span>
                              </div>
                              <div className="column">
                                <label htmlFor="accountNumber">Account Number: </label>
                                <span id="accountNumber">{myProfileDetails.accountNumber}</span>
                              </div>
                              <div className="column">
                                <label htmlFor="bvn">BVN: </label>
                                <span id="bvn">{myProfileDetails.bvn}</span>
                      </div>

                </div>



            </div>

       

            <div className="two-column-row">
                      <div className="column">
                         <button variant="outlined"   size="small" color="primary" onClick={handleBack}>	Back </button>
                      </div>
                      <div className="column">
                         <button  size="small" color="primary" onClick={handleSaveNow}>My Details Are Fine Save Now</button>
                      </div>                
                  </div>

            </div>
        </div>
    </div>


  )

  }
}


export default Confirm;



