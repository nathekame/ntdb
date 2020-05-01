import React, { useContext } from 'react'
import '../../public/assets/style.scss';
import Menu from './menu';

import { ProfileContext } from '../../store/contexts/profileContext'
import Logout from '../../utility/logout'


function Navbar() {

    const { dispatch  } = useContext(ProfileContext);


    const handleLogout = ()=>{
        dispatch({type: 'CLEAR_CONTEXT'});
        Logout();
    }

    return (
      
            <nav className="navbar">
                <div className="two-column-row">
                    <div className="column"> <img src="/images/ubelogo.jpeg" alt="logo" height="70px" width="200px"/></div>
                    <div id="navLogout" className="navLogout"><a onClick={handleLogout}> <img src="/images/logout.png" alt="logo" height="30px" width="30px"/></a></div>
                </div>
                <div id="pageTitle" className="one-column-row">
                    <div className="navTitle"> <h4>NIGER STATE UNIVERSAL BASIC EDUCATION TEACHERS DATABASE</h4></div>
                </div>
            </nav>
      
    )

}

export default Navbar













        {/* <div>
                <div className="topnav" id="myTopnav">
                        <a href="#home" className="active"><img src="/images/ubelogo.jpeg" alt="logo" height="100px" width="200px"/></a>

                        <a href="#home" >Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <a href="#" className="icon" onClick={myFunction}>
                        <FaBars />
                        </a>
                </div>
            </div> */}