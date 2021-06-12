import React, { useState, useEffect, useRef} from 'react';
import './SignUpScreen.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {auth} from '../firebase';
import db from '../firebase';


const SignUpScreen = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    const emailRef = useRef(null);
    const passRef = useRef(null);


    const register = (e) => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(emailRef, passRef)
      .then( (userAuth) => {
          toast("success !",{type:'success'},userAuth);         
          console.log("Register User: ",userAuth); 
      }) 
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("Error Message is :"+errorMessage+"errorCode is :"+errorCode);
          toast(errorMessage,{type:'error'});
          // ..
      });
  }

 const signIn = (e) => {
     e.preventDefault();
  }
 

  return (
  <div className="SignUpScreen mt-0 mb-3 ">
     <form>
     <ToastContainer />
       <h1 className="mb-3 pt-1  pb-2 float-start">Sign In</h1>
         <input type="email" ref={emailRef} placeholder="Email" />
         <input type="password" ref={passRef} placeholder="password" />
         <button className="mt-4" onClick={signIn}>Sign In</button>
         <h5 className="mt-2">
            <span className="text-muted ">New to Netflix? </span>
            <span className="signUp__link" onClick={register}>Sign up now.</span>
         </h5>
     </form>      
  </div>
    )
}

export default SignUpScreen

