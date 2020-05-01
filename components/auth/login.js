import React, { useState, useEffect } from 'react'

import Link from 'next/link'

import axios from 'axios';

import { useRouter } from 'next/router'

import Cookie from 'js-cookie'

import jwtFuncs from '../../utility/jwt'
import localStorageFuncs from '../../utility/localStorage';
import config from '../../config/config';

import Validator from 'validatorjs';

import { ToastContainer , toast } from 'react-toastify';

import 'materialize-css/dist/css/materialize.min.css'
import 'react-toastify/dist/ReactToastify.min.css';




const Login = (props) => {

      const router = useRouter()


      const [user, setUser] = useState(
          {
            email: '',
            password: ''
          
          }
      );

      const [buttonState, setButtonState] = useState(true);

    
      let rules = {
        email: 'required|email',
        password: 'required',
 
      };
      
      let validation = new Validator(user, rules, { required: '*' });
    
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


       console.log("API response "+apiCall.data.msg);

       const token = apiCall.data.userToken;
       const apiMsg = apiCall.data.msg;

       if(!token){
         
          toast(apiMsg, {
            type: toast.TYPE.ERROR,
            className: 'errorToast'
          })
      
       }

       if(token){

            Cookie.set("auth", token);

            localStorageFuncs.setItemInStorage("auth", token);

            toast("Login Success", {
              type: toast.TYPE.SUCCESS,
              className: 'successToast'
            })

          
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

      useEffect(() => {

        if (validation.passes()) {
                setButtonState(false);
               // console.log("the   buttonStete "+buttonState);  
           }else{
            setButtonState(true);
          
       }
        },[user]);
        


        
      return (

                 
           <div className="container">
              
              <div className="row">      
          
                <ToastContainer></ToastContainer>
                    <div className="content">
                        <form className="form " className="col s12 " onSubmit={handleSubmit} >
                            <div className="formPadding z-depth-2">
                                <div className="row">
                                        <div className="">
                                            <img class="responsive-img formLogo" src="/images/ubelogo.jpeg" alt="logo" />
                                        </div>
                                </div>
                                <div className="row">
                                         <h4 className="center">Login</h4>
                                </div>
                                <div className="row">
                                      <div className="col s12">
                                          <label htmlFor="email"><h6><span className="text">Email</span> <span className="fieldError">{validation.errors.get("email")}</span></h6></label>
                                          <input onChange={handleChange}  name="email" id="email" type="email" />
                                      </div>                                                
                                </div>                    
                                <div className="row">
                                    <div className="col s12"> 
                                            <label htmlFor="password"><h6><span className="text">Password</span> <span className="fieldError">{validation.errors.get("password")}</span></h6></label>
                                            <input onChange={handleChange}  name="password" id="password" type="password" />
                                    </div>
                                </div>
                       
                                <div className="row">
                                    <div className="col s6"> 
                                        <h6>Don't have an account?   <Link href="/"><a>Register</a></Link></h6>
                                    </div>
                                    <div className="col s6"> 
                                      <button className="button black" disabled={buttonState}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    
              </div>

        </div>
    




      )
}




export default Login;


//export default  withStyles(Login);
