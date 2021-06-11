import React from 'react';
import './SignUpScreen.css';

const SignUpScreen = () => {
    
    const register = (e) =>{
       e.preventDefault();
    }
    const signIn = (e) => {
        e.preventDefault();
    }

    return (
    <div className="SignUpScreen mt-0">
     <form>
       <h1 className="mb-3 float-start">Sign In</h1>
         <input type="email" placeholder="Email" />
         <input type="password" placeholder="password" />
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

