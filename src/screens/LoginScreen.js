import React, { useState } from 'react'
import './LoginScreen.css'

import SignUpScreen from './SignUpScreen';

import { MdKeyboardArrowRight } from 'react-icons/md';


const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);
    return (
    <div className="loginScreen  ">
     <div className="loginScreen__background">
       <img className="loginScreen__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>     
       <button className="loginScreen__button" onClick={()=>setSignIn(true)}>Sign In</button>
    
       
     </div>
     
     <div className="loginScreen__body container-fluid">
        { 
         signIn ? (<SignUpScreen/>) : (<>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen__input m-3">
              <form>
                  <input className="nfTextField " type="email" placeholder="Enter your email" />
                  <button className="get__started btn-red" onClick={()=>setSignIn(true)}>Get Started<MdKeyboardArrowRight/></button>
              </form>
            </div>
         </>)
        }
     </div>
     <div className="loginScreen__gradient" ></div>
          
    </div>
    )
}

export default LoginScreen


