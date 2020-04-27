import React, {  useEffect } from 'react'

// import useSWR , { SWRConfig } from 'swr'

import '../public/assets/style.scss'

import Head from 'next/head'

import axios from 'axios';

import Login from "../components/auth/login"
import Logout from '../utility/logout';
import Navbar from '../components/layouts/navbar';

import Cookie from 'js-cookie'
// import Layout from '../components/layouts/layout';

// import "../public/assets/js/utility.js"

//import Navbar from '../layouts/navbar'

import ProfileContextProvider from '../store/contexts/profileContext'
import config from '../config/config';
import jwtFuncs from '../utility/jwt';




const apiCall = async (id) => {


  const userToken = Cookie.get('auth'); 
  console.log("this is the cookie is got "+userToken);


  const options = {
    withCredentials: true,
     headers: {
       'Authorization': `Bearer ${userToken}`
     }
  } 

     const userID = jwtFuncs.jwtUID(userToken);
   //  console.log("the user ID "+userID);

        const url = config.apiUrl+"profile/"+userID

        // Make a request for a user with a given ID
        const res =  await axios.get(url, options).then(function (response) {
                                                                  // handle success
                                            
                                          return response

                                        }).catch(function (error) {
        // //                                                               // handle error
                                                  console.log("this is the error "+error);

                                                  return null

                                                  });

              

              const resOutput = await res;

              return resOutput


}



const Account = () => {

  // const { auth } = useContext(AuthContext);

//  const localJWTT = localStorage.getItem("jwt");

//const url = "http://localhost:5000/api/"

//const [ data, error ] = useSWR(url , apiCall );


const handleLogout = () =>{

  Logout();

}

   

    useEffect(() => {

      apiCall();
      });


return (
  <div>
  
        <ProfileContextProvider >     
              <div className="pagegrid">    
                  <div className="innergrid">
                  <Navbar />
                      <h1>sthis is the acout page</h1>
                      <h1>sthis is the acout page</h1>
                      <h1>sthis is the acout page</h1> <h1>sthis is the acout page</h1>
                      <h1>sthis is the acout page</h1>
                      <h1>sthis is the acout page</h1>
                      <button onClick={handleLogout}>Logout</button>
                  </div>
              </div>     
        </ProfileContextProvider>
  </div> 
)   

/*
  

  const localJWTState = () => {

    const localJWT = localStorage.getItem("jwt");

    console.log("this is he tokeennnnnn "+localJWT);
    return localJWT ? JSON.parse(localJWT) : '';

}

  useEffect(() => {
    //  localStorage.setItem('auth', JSON.stringify(auth))

     document.headers['authorization'] = `Bearer ${localJWTState}`
    // headers: {
    //   'Authorization': `Bearer ${currentUserAuthToken}`
    // }
  }) ;
 
  
 
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
 
 // console.log(dispatch);
 
   
  
 
 
 
 
 
 





export default Account