import React,{ useState, useEffect } from 'react'
import './Nav.css'

const Nav = () => {
   const [navAnima, setNavAnima] =useState(false);

   const AnimationHandler = () => { 
      if(window.scrollY >100){
        setNavAnima(true);
      }
      else{
        setNavAnima(false);
      }
    };
    
   useEffect( ()=> {
       window.addEventListener('scroll', AnimationHandler);
       return () => {
           window.removeEventListener('scroll', AnimationHandler);
        }
     },[]);

    return (
      <div className={`nav ${ navAnima && 'nav__black'}`}>
         <div className="nav__contents">
            <img className="float-start  nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix brand logo"/>
            <img className=" float-end rounded nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix avatar"/>
         </div>
      </div>
    )
}
export default Nav;

