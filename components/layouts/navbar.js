import React, { useContext } from 'react'

//import '../../public/assets/style.scss';
import Menu from './menu';

import { ProfileContext } from '../../store/contexts/profileContext'
import Logout from '../../utility/logout'
import { FaBars } from 'react-icons/fa';

import '../../public/assets/mobile.scss'


 const Navbar = () => {

    const { dispatch  } = useContext(ProfileContext);


   const  myFunction =()=>{
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += "  responsive";
        } else {
          x.className = "topnav";
        }
      }

   const handleLogout = ()=>{
        dispatch({type: 'CLEAR_CONTEXT'});
        Logout();
    }

    //   const  myFunction =()=>{
    //     var x = document.getElementById("mobileLinks");
    //     if (x.style.display === "block") {
    //       x.style.display = "none";
    //     } else {
    //       x.style.display = "block";
    //     }
    //   }

        return (

                    <div>
                        <div className="topnav" id="myTopnav">
                       
                                   <img src="/images/ubelogo.jpeg" alt="logo" height="110px" width="280px"/>
                               
                                   <a onClick={handleLogout}> Logout</a>
                                    
                                    <a href="#">Reports</a>
                                    <a href="#">Entries</a>
                                    <a href="#">My Account</a>
                                    
                                    <a href="#" className="icon" onClick={myFunction}>
                                    <FaBars />
                                    </a>
                             
                      
                       
                        </div>
                    </div>
    
             
         
                
        )
    
}


export default Navbar