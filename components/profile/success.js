import React, { useState,useEffect, useContext } from 'react'
import { ProfileContext } from '../../store/contexts/profileContext'
import '../../public/assets/style.scss';
import Logout from '../../utility/logout'

import Navbar from '../layouts/navbar'
import 'materialize-css/dist/css/materialize.min.css'


const Success =()=> {




        const { dispatch } = useContext(ProfileContext);



        const handleClick = () =>{

            dispatch({type: 'CLEAR_CONTEXT'});
            Logout();

        }


    return (
       
           <div className="pagegrid">
      

        <div className="innergrid">

            <div className="successContainer" >
                        <img src="/images/success.png" alt="success" height="100px" width="100px"/>
                           <h3>You Have Successfully completed ur profile</h3>
                        <button  size="small" color="primary" onClick={handleClick}>Logout</button>

                    </div>
                    
                </div>
        </div>
    )
}

export default Success
