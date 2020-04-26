import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { useRouter } from 'next/router'

import Cookie from 'js-cookie'

import jwtFuncs from '../../utility/jwt'

import Link from 'next/link'

import Validator from 'validatorjs';
import axiosFuncs from '../../utility/axios';
import localStorageFuncs from '../../utility/localStorage';



const Register = (props) => {

      const router = useRouter()


      const [userReg, setUserReg] = useState(
          {
            email: '',
            password: '',
            cpassword:'',
            fileNumber:''
          
          }
      );

      let rules = {
        email: 'required|email',
        password: 'required',
        cpassword: 'required|same:password',
        fileNumber: 'required'
      };
      
      let validation = new Validator(userReg, rules, { required: 'required*' });
    
      validation.fails(); // true
      validation.passes(); // false


    const  handleChange =(e) => {
          setUserReg({ ...userReg, [e.target.id]: e.target.value })
    
      }
      
    const  handleSubmit = async (e) => {

        e.preventDefault();

        console.log("the current state before submit state "+JSON.stringify(userReg));

        const data = {
          email: userReg.email,
          password: userReg.password,
          fileNumber: userReg.fileNumber
        }

        
        let api = await axiosFuncs.userRegister(data);
        const token = api.data.userToken;
        console.log("this is the status from the register"+api.status);
         if(api.data === "error" ){
           console.log("the log is error");
           router.push('/');
          }
         if (api.status === 201) {
           console.log("the log is success"+api.status);
              if(token){
                Cookie.set("auth", token);
                localStorageFuncs.setItemInStorage("auth", token);
               }
           router.push('/profile')
           
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
                                <h1> Register </h1>
                                </div>
                          </div>
                        <div className="grid">
                       
                            <div className="one-column-row">
                                <div className="column"> 
                                <label htmlFor="email">Email <span className="fieldError">{validation.errors.get("email")}</span></label>
                                <input onChange={handleChange}  name="email" id="email" type="email" />
                                </div>
                                <div className="column"> 
                                <label htmlFor="fileNumber">File Number <span className="fieldError">{validation.errors.get("fileNumber")}</span></label>
                                <input onChange={handleChange}  name="fileNumber" id="fileNumber" type="text" />
                                </div>
                              
                            
                                <div className="column"> 
                                <label htmlFor="password">Password <span className="fieldError">{validation.errors.get("password")}</span></label>
                                <input onChange={handleChange}  name="password" id="password" type="password" />
                                </div>
                                <div className="column"> 
                                <label htmlFor="cpassword">Confirm Password <span className="fieldError">{validation.errors.get("cpassword")}</span></label>
                                <input onChange={handleChange}  name="cpassword" id="cpassword" type="password" />
                                </div>
                              
                              </div>

                              <div className="two-column-row">
                                <div className="column"> 
                                <p>Already Registered?  <Link href="/login"><a>Login</a></Link></p>
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




export default Register;


//export default  withStyles(Register);
