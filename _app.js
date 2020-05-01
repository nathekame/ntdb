import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import AuthContextProvider from './contexts/authContext'

import ProfileContextProvider from './contexts/profileContext'

import '../public/assets/style.scss'

import 'materialize-css/dist/css/materialize.min.css'

// import { ToastContainer , toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


//toast.configure();

class MyApp extends App {
  
  render() {

 
    const { Component, pageProps } = this.props;
    return (
      <div>
        <div>
          <Head>
            // stuff.....
           
          </Head>
        </div>
        <AuthContextProvider>
            <ProfileContextProvider>
               
                <Component {...pageProps} />
         
           </ProfileContextProvider>
        </AuthContextProvider>
      </div>
    )
  }
}
export default MyApp