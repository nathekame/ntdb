
import React, { useState,  useEffect, useContext } from 'react'

import { profileReducer } from '../store/reducers/profileReducer';

import BioInformation  from '../components/profile/bioInformation'

import ContactInformation  from '../components/profile/contactInformation'


import PaymentInformation  from '../components/profile/paymentInformation'

import EmploymentInformation from '../components/profile/employmentInformation'

import ProfilePic from '../components/profile/profilePic'

import Confirm  from '../components/profile/confirm'

//import Navbar from '../components/layouts/navbar'



import localStorageFuncs from '../utility/localStorage'

import jwtFuncs from '../utility/jwt'


//import { withRouter } from 'next/router'


import Cookie from 'js-cookie'
import ProfileContextProvider from '../store/contexts/profileContext'

import { ProfileContext } from '../store/contexts/profileContext'

import { isMoment } from 'moment';
import { AuthContextProvider } from '../store/contexts/authContext';
import { useRouter, Router } from 'next/router';
import Login from '../components/auth/login';

import _ from 'lodash';

import '../public/assets/style.scss'
import Success from '../components/profile/success';
import GuarantorInformation from '../components/profile/guarantorInformation';
import TeachingInformation from '../components/profile/teachingInformation';
import NonTeachingInformation from '../components/profile/nonTeachingInformation';
import CategoryInformation from '../components/profile/categoryInformation';
import Navbar from '../components/layouts/navbar';


//const token = localStorage.getItem("jwt");





const Profile = (props) => {

 //   const router = useRouter();

    const lCookie = Cookie.get('auth'); 
    console.log("the l cookie "+lCookie);
 //   const localStorageAuth = localStorageFuncs.getItemFromStorage("auth");

   

 if(lCookie == undefined){
    //   console.log("no cookie founnd ");
 //      const router = useRouter();
      // router.push("/");
     return (
         <Login />
     )


   }
   

   // console.log("this is he lCookie "+lCookie);

 

    const profileStep = (token) => {

        console.log("the tokne "+token);

        return token ? jwtFuncs.jwtProfileStep(token) : 1
        
    }
    

    const getinitialState = () => {

        const profileFromStorage = localStorageFuncs.getItemFromStorage("profile");
      //  const authFromStorage = localStorageFuncs.getItemFromStorage("auth");
      //  const profileFromStorageStep = profileFromStorage.currentStep;

  //      console.log("the profile from Storage "+JSON.stringify(profileFromStorage));

        // const stepFromCookie = profileStep(lCookie);
        const stepFromCookie = 1
        console.log("this i sthe step from cookie "+stepFromCookie);
     //  const stepFromStorage = profileStep(localStorageAuth);
     //   console.log("the profile from Storage from cookiesss testtststststs "+stepFromCookie);

      //  const stepFromStorage  = profileFromStorage.currentStep;
    //    const stepFromStorage  = {};
      
         let proCheck = _.isEmpty(profileFromStorage); // true

        if(proCheck){
         //   console.log("you are seeing this cos of the stepfrom reducer---------")
                return stepFromCookie
        }else{
           // console.log("you are seeing this cos of the stepfrom cookie")
            const stepFromStorageCurrentStep = profileFromStorage.currentStep;
            return stepFromStorageCurrentStep
        }

    }


  //  const initialState = profileStep(lCookie);

   const initialState = getinitialState();
//  const initialState = 1;

   console.log("the initial state of the matter "+initialState);

    const [profileStepState, setProfileStepState] = useState(initialState)

    useEffect(()=>{
      //  console.log("this is the state of the profile step====> "+profileStepState);
       // currentStep(profileStepState);

    },[profileStepState]);

    

   
   const localJWT = () => {

    const localCookie = Cookie.get('auth'); 

 //   console.log("this is the local cookie "+localCookie);

    return localCookie ? localCookie : undefined;

//    const localJWT = localStorage.getItem("jwt");
 //   return localJWT ? JSON.parse(localJWT) : '';

    }



    const token = localJWT();


    const proStep = (step) => {
     //   console.log("this is the proStep functionnnn ========>>>>> "+step);
        
      return  step === "F" ? setProfileStepState(profileStepState + 1) : setProfileStepState(profileStepState - 1)
    
    }

    const finishStep = (step) => {
        //   console.log("this is the proStep functionnnn ========>>>>> "+step);
           
         return  step === "END" ? setProfileStepState(8) : setProfileStepState(7)
       
       }
  
  //  const profileStep = jwtFuncs.jwtProfileStep(token);
 



    switch(profileStepState) {
        case 1:
        //  console.log("i dey case 1 now i wan render");
            return (
                
                
                    <ProfileContextProvider >
                        <Navbar />   
                        <BioInformation currentStep={profileStepState} updatestep={proStep} />
                    </ProfileContextProvider>
               
            )

        case 2:
            return (

                    <ProfileContextProvider >
                        <ContactInformation currentStep={profileStepState} updatestep={proStep}  />
                    </ProfileContextProvider>
            )
        case 3:
          //  console.log("i dey case 3 now i wan render");
            return (
                    <ProfileContextProvider >
                        <GuarantorInformation currentStep={profileStepState} updatestep={proStep}  />
                    </ProfileContextProvider>
            )
        case 4:

           // console.log("i dey case 4 now i wan render");
                return (

                    <ProfileContextProvider >
                        <EmploymentInformation updatestep={proStep} />
                    </ProfileContextProvider>
                   
            )
        case 5:
            return (

                <ProfileContextProvider>  
                    <CategoryInformation updatestep={proStep} />
                </ProfileContextProvider>
               
            )
              
          //  return categoryCheck(userCategory)
        case 6:
                return (
                     <ProfileContextProvider >
                        <PaymentInformation updatestep={proStep}  />
                    </ProfileContextProvider>
                )
        case 7:
                    return (
                         <ProfileContextProvider >
                            <ProfilePic updatestep={proStep}  />
                        </ProfileContextProvider>
                    )
        case 8:
                        return (
                            <ProfileContextProvider >
                                <Confirm updatestep={proStep}  />
                            </ProfileContextProvider>
                        )
         case 9:
                        return (
                            <ProfileContextProvider >
                                <Success updatestep={finishStep}  />
                            </ProfileContextProvider>
                        )
        default:
                return (
                    <ProfileContextProvider >
                        <BioInformation currentStep={profileStepState} updatestep={proStep} />
                    </ProfileContextProvider>
                )
    }




/*
  

       return (
              
                <div className="container">
                  <Head>
                  
                  </Head>
              
                  <main>
                  <h1>this is the account page</h1>
                  </main>
              
                  <footer>
                
                  </footer>
              
                  <style jsx>{`
                  
                  `}</style>
              
                  <style jsx global>{`
              
                  `}</style>
                </div>
              
        )   */
 
 
 
     }
 

 



//export default withRouter(Profile)

export default Profile