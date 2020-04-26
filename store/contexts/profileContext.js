import React, { createContext, useReducer, useEffect } from 'react'
import { profileReducer } from '../reducers/profileReducer';


export const ProfileContext = createContext();


const localStorageTest =() =>{ 
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}



const ProfileContextProvider = (props) => {

        const initialState = { }

        const localState = () => {

            if(localStorageTest() === true){
                // available
                 
                const localData = localStorage.getItem("profile");

                return localData ? JSON.parse(localData) : initialState;
            }else{
                // unavailable
                return initialState
            }
           

        }

        const [ profile, dispatch ] = useReducer( profileReducer, initialState, localState )
     //   const [ profile, dispatch ] = useReducer( profileReducer, initialState )

        useEffect(() => {
            if(localStorageTest() == true){
                // available
                 
                localStorage.setItem('profile', JSON.stringify(profile))

            }
           
        }, [profile])


            return (
                <ProfileContext.Provider value={{profile, dispatch}}>
                    {props.children}
                </ProfileContext.Provider>
            );       


}

export default ProfileContextProvider;