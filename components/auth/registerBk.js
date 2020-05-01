import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { useRouter } from 'next/router'

import Cookie from 'js-cookie'

import jwtFuncs from '../../utility/jwt'

import Link from 'next/link'

import Validator from 'validatorjs';
import axiosFuncs from '../../utility/axios';
import localStorageFuncs from '../../utility/localStorage';
import _ from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'


const Register = (props) => {

      const router = useRouter()


      const [userReg, setUserReg] = useState(
          {
            email: '',
            password: '',
            cpassword:'',
            controlNumber:''
          
          }
      );

      const [buttonState, setButtonState] = useState(true);

      const [ regError, setRegError ] = useState({errorMsg: ''});


      let rules = {
        email: 'required|email',
        password: 'required',
        cpassword: 'required|same:password',
        controlNumber: 'required'
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
          controlNumber: userReg.controlNumber
        }

        
        let api = await axiosFuncs.userRegister(data);
        const token = api.data.userToken;
        const apiMsg = api.data.msg;
        console.log("this is the status from the register ====>>> "+api.status);
        console.log("this is the data from the register ====>>> "+JSON.stringify(api.data));
        console.log("this is the data from the register ====>>> "+api.data.msg);
         if(api.data === "error" ){
           console.log("the log is error");
           router.push('/');
          }
        if(api.status === 200 ){
       //   const [ regError, setRegError ] = useState({errorMsg: ''});
         // setUserReg({ ...userReg, [e.target.id]: e.target.value })
        //    setRegError({...regError, errorMsg:  api.data.msg});
            
            toast(apiMsg, {
              type: toast.TYPE.ERROR,
              className: 'errorToast'
            })
          
            router.push('/');
           }
         if (api.status === 201) {
           console.log("the log is success"+api.status);
              if(token){
                Cookie.set("auth", token);
                localStorageFuncs.setItemInStorage("auth", token);
               }
            toast("Registration Success", {
                type: toast.TYPE.SUCCESS,
                className: 'successToast'
              })
           router.push('/profile')
           
         }

       //  console.log("the erro "+regError.errorMsg);

    }

    useEffect(() => {

      if (validation.passes()) {
              setButtonState(false);
             // console.log("the   buttonStete "+buttonState);  
         }else{
          setButtonState(true);
        
     }
      },[userReg]);
      

  const checkForError = ()=> {

    const val = regError.errorMsg
    const isEmp = _.size(val);
    if(isEmp > 0){
      console.log("it is true that hteres omething there look at it "+val);

    }
    if(isEmp === 0){
        console.log(" na lie ooo nothig dey inside "+val);
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

                     <ToastContainer />
                  

                        
                        <div className="grid">
                            <div className="one-column-row">
                                <div className="column"> 
                                <label htmlFor="email">Email <span className="fieldError">{validation.errors.get("email")}</span></label>
                                <input onChange={handleChange}  name="email" id="email" type="email" />
                                </div>
                                <div className="column"> 
                                <label htmlFor="controlNumber">Control Number <span className="fieldError">{validation.errors.get("controlNumber")}</span></label>
                                <input onChange={handleChange}  name="controlNumber" id="controlNumber" type="text" />
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
                                   <button className="button" disabled={buttonState}>submit</button>
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
