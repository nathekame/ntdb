import React, { useState,  useEffect, useContext } from 'react'
import { ProfileContext } from '../../store/contexts/profileContext';

import ProfileContextProvider from '../../store/contexts/profileContext'
 
import TeachingInformation from '../../components/profile/teachingInformation';
import NonTeachingInformation from '../../components/profile/nonTeachingInformation';

import 'materialize-css/dist/css/materialize.min.css'


const CategoryInformation =(props)=> {

    
        const profileData = useContext(ProfileContext);


        console.log("this is the profile satdta  for the check ooo "+JSON.stringify(profileData));

  //     console.log("i entered here for the category check ==============>>>>  "+JSON.stringify(props.updatestep()));
    
    
       // let userCategoryString = userCategory.toString();

       let userCategoryString = profileData.profile.employmentInformation.staffCategory;


       const proStep = (step) => {
        //   console.log("this is the proStep functionnnn ========>>>>> "+step);
           
         return  step === "F" ? setProfileStepState(profileStepState + 1) : setProfileStepState(profileStepState - 1)
       
       }
       
    
       if(userCategoryString === "Teaching"){
    
        console.log("i am ready to drop the staff details component")
    
            return (
                    <div>
                         <ProfileContextProvider >
                              <TeachingInformation updatestep={props.updatestep}  />
                         </ProfileContextProvider>
                    </div>
            );
    
        } 
    
        if(userCategoryString ===  "Non Teaching"){
    
            console.log("i am ready to drop the staff details component")
        
                return (
                        <div>
                             <ProfileContextProvider >
                                  <NonTeachingInformation updatestep={props.updatestep} />
                             </ProfileContextProvider>
                        </div>
                );
        
            } 


}



export default CategoryInformation
