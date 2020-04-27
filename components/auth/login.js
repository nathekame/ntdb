import React, { useState } from 'react'

import Link from 'next/link'

import axios from 'axios';

import { useRouter } from 'next/router'

import Cookie from 'js-cookie'

import jwtFuncs from '../../utility/jwt'
import localStorageFuncs from '../../utility/localStorage';
import config from '../../config/config';

import Validator from 'validatorjs';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = (props) => {

      const router = useRouter()


      const [user, setUser] = useState(
          {
            email: '',
            password: ''
          
          }
      );

    
      let rules = {
        email: 'required|email',
        password: 'required',
 
      };
      
      let validation = new Validator(user, rules, { required: 'required*' });
    
      validation.fails(); // true
      validation.passes(); // false



    const  handleChange =(e) => {

      e.preventDefault();
          setUser({ ...user, [e.target.id]: e.target.value })
    
      }
      
    const  handleSubmit = async (e) => {

        e.preventDefault();

        console.log("the current state before submit state "+JSON.stringify(user));

        const localJWT = () => {

          const localCookie = Cookie.get('auth'); 

          return localCookie ? localCookie : undefined;

      //    const localJWT = localStorage.getItem("jwt");
       //   return localJWT ? JSON.parse(localJWT) : '';

      }

      console.log("the local JWt "+localJWT());
     // connect to the db via axios and the dispatch an action based on the server response

      const options = {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${localJWT}`
        }
      } 

       const url = config.apiUrl+'login'

       let apiCall = await axios.post(url, user);


       console.log("API response "+apiCall.data.userToken);

       const token = apiCall.data.userToken;

       if(token){

            Cookie.set("auth", token);

            localStorageFuncs.setItemInStorage("auth", token);

          
            // decode the token and return the users details

           let isProfileComplete = jwtFuncs.jwtProfile(token);
           //let isProfileComplete = '"1"'

           console.log("this is the returned vaalue "+ isProfileComplete);
   
           if(isProfileComplete === '"1"'){

            console.log("the token was decoded well so you are free to go");

              //   router.push('/account')
        
            router.push('/success')
            

         }

          if(isProfileComplete === "null" || isProfileComplete === '"0"'){


              router.push('/profile')
  

          }
  

        }


      }


        
      return (


          <div className="pagegrid">

<div className="innergrid">
    

      <form className="form"  onSubmit={handleSubmit} >
          <div className="one-column-row">
              <div className="column">
                <img src="/images/ubelogo.jpeg" alt="logo" height="200px" width="600px"/>
              </div>
              <div className="column">
                  <h1> Login </h1>
              </div>
        </div>
        <ToastContainer />

      <div className="grid">
          <div className="one-column-row">
              <div className="column"> 
              <label htmlFor="email">Email <span className="fieldError">{validation.errors.get("email")}</span></label>
              <input onChange={handleChange}  name="email" id="email" type="email" />
              </div>
           
            
          
              <div className="column"> 
              <label htmlFor="password">Password <span className="fieldError">{validation.errors.get("password")}</span></label>
              <input onChange={handleChange}  name="password" id="password" type="password" />
              </div>
             
            
            </div>

            <div className="two-column-row">
              <div className="column"> 
              <p>Don't have an account?    <Link href="/"><a>Register</a></Link></p>
              </div>
              <div className="column"> 
               <button className="button">submit</button>
              </div>
            
            </div>
      </div>

              
      </form>

    
</div>
</div>






      )
}




export default Login;


//export default  withStyles(Login);
