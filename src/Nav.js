import React,{ useState, useEffect } from 'react'
import './Nav.css'
import { FaUserCircle } from 'react-icons/fa';
import {auth} from './firebase';
import { useHistory  } from "react-router-dom";


const Nav = () => {
   const [navAnima, setNavAnima] = useState(false); 
   const history = useHistory();

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
      <>
      <div className={`nav ${ navAnima && 'nav__black'}`}>
         <div className="nav__contents">
            <img onClick={()=>history.push("/")} className="float-start nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix brand logo"/>
        
            <FaUserCircle onClick={()=>history.push("/profile")} className="text-light float-end rounded nav__avatar"/>
        
         </div>
      </div>
     </>
    )
}
export default Nav;

