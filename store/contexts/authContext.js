import React, { createContext, useReducer, useEffect } from 'react'
import { authReducer } from '../reducers/authReducer';


export const AuthContext = createContext();


export const AuthContextProvider = (props) => {

   //     const state = {}
        


   //     const { auth, dispatch } = useReducer( authReducer, state, localState )

 //      const { auth, dispatch } = useReducer( authReducer, state )
 const initialState = {}
 const [ auth, dispatchh ] = useReducer( authReducer, initialState )
 
   /*     useEffect(() => {
          //  localStorage.setItem('auth', JSON.stringify(auth))
          return true
        }, [auth]) */

      //  console.log("this is the context from the client side "+ localData);

//<AuthContext.Provider value={{auth, dispatch}}>

            return (
                <AuthContext.Provider value={{auth, dispatchh}} >
                    {props.children}
                </AuthContext.Provider>
            );       


}

//export default AuthContextProvider;