import React, { useState, useEffect} from 'react';
import './SignUpScreen.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

import {auth} from '../firebase';
import db from '../firebase';

const SignUpScreen = () => {
 const user = useSelector(selectUser);
 
 const  history = useHistory();

 const[email, setEmail] = useState('');
 const[password, setPassword] = useState('');
 
 
 const register = (e) => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
      .then( (userAuth) => {
          toast("Register Successfully!",{type:'success'},userAuth);         
          console.log("Register User: ",window.screen.width,userAuth); 
          
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
     auth.signInWithEmailAndPassword(email, password)
     .then( (loginUser) =>{
         console.log("Login User Data",loginUser);
         toast(loginUser.user.email +" You have successfully login!",{type:'success'});  
         
     })
     .catch( (error) => {
         toast(error.message,{type:'warning'});
         console.log("Login Error",error);
     });
}

useEffect(()=>{
    if(user?.email) {
        return history.push("/");
    }
});
 
 return(
  <div className="SignUpScreen mt-0 mb-3 ">
     <form>
     <ToastContainer />
       <h1 className="mb-3 pt-1  pb-2 float-start">Sign In</h1>
         <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
         <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password" />
         <button className="mt-4" onClick={signIn}>Sign In</button>
         <h5 className="mt-2">
            <span className="text-muted ">New to Netflix? </span>
            <span className="signUp__link" onClick={register}>Sign up now.</span>
         </h5>
     </form>      
  </div>
    )
}

export default SignUpScreen;

