import React from 'react'
import '../public/assets/style.scss'
import Success from '../components/profile/success';
import ProfileContextProvider from '../store/contexts/profileContext'


const SucceessPage =()=> {


  
            return (    
                       <ProfileContextProvider >
                                <Success />
                        </ProfileContextProvider>   
            )     
          
    
    
}

export default SucceessPage
