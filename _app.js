import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import AuthContextProvider from './contexts/authContext'

import ProfileContextProvider from './contexts/profileContext'



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