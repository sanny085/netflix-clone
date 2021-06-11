import React, { useState, useEffect} from 'react';
import './SignUpScreen.css';

const SignUpScreen = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

  const register = (e) =>{
     e.preventDefault();
  }
  const signIn = (e) => {
     e.preventDefault();
  }
  useEffect(() => {
   console.log(email,password);
  }, [email]);

  return (
    <div className="SignUpScreen mt-0 mb-3">
     <form>
       <h1 className="mb-3 float-start">Sign In</h1>
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

export default SignUpScreen

