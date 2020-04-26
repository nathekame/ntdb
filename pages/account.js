import React, {  useEffect } from 'react'

// import useSWR , { SWRConfig } from 'swr'

import '../public/assets/style.scss'

import Head from 'next/head'

import axios from 'axios';

import Login from "../components/auth/login"
import Logout from '../utility/logout';
// import Navbar from '../components/layouts/navbar';
// import Layout from '../components/layouts/layout';

// import "../public/assets/js/utility.js"



const apiCall = async () => {

  const options = {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${currentUserAuthToken}`
    }
  } 



        // Make a request for a user with a given ID
        const res =  await axios.get('http://localhost:5000/',options).then(function (response) {
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


return (
  <div>
     
    {/* <Layout /> */}
        <div className="page">
        <div className="main">
            <h1>sthis is the acout page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
        </div>
      

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