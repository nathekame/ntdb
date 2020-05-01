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
import 'materialize-css/dist/css/materialize.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//import 'materialize-css';
//import 'materialize-css/dist/css/materialize.min.css'


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
      
      let validation = new Validator(userReg, rules, { required: '*', same:'Password Mismatch' });
    
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

            
       
           <div className="container">
              
                  <div className="row">      
              
                    <ToastContainer />
                        <div className="content">
                            <form className="form " className="col s12 " onSubmit={handleSubmit} >
                                <div className="formPadding z-depth-2">
                                    <div className="row">
                                            <div className="">
                                                <img class="responsive-img formLogo" src="/images/ubelogo.jpeg" alt="logo" />
                                            </div>
                                    </div>
                                    <div className="row">
                                             <h4 className="center">Register</h4>
                                    </div>

                                    <div className="row">
                                          <div className="col s12">
                                              <label htmlFor="email"><h6><span className="text">Email</span> <span className="fieldError">{validation.errors.get("email")}</span></h6></label>
                                              <input onChange={handleChange}  name="email" id="email" type="email" />
                                          </div>
                                                      
                                    </div>

                                    <div className="row">
                                          <div className="col s12"> 
                                              <label htmlFor="controlNumber"><h6><span className="text">Control Number</span> <span className="fieldError">{validation.errors.get("controlNumber")}</span></h6></label>
                                              <input onChange={handleChange}  name="controlNumber" id="controlNumber" type="text" />
                                          </div>                  
                                    </div>

                                    <div className="row">
                                        <div className="col s12"> 
                                                <label htmlFor="password"><h6><span className="text">Password</span> <span className="fieldError">{validation.errors.get("password")}</span></h6></label>
                                                <input onChange={handleChange}  name="password" id="password" type="password" />
                                        </div>
                                    </div>

                                    <div className="row">
                                            <div className="col s12"> 
                                            <label htmlFor="cpassword"><h6><span className="text">Confirm Password</span> <span className="fieldError">{validation.errors.get("cpassword")}</span></h6></label>
                                                <input onChange={handleChange}  name="cpassword" id="cpassword" type="password" />
                                              </div>
                                    </div>

                                    <div className="row">
                                        <div className="col s6"> 
                                            <h6>Already Registered ?  <Link href="/login"><a>Login</a></Link></h6>
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




export default Register;


//export default  withStyles(Register);
