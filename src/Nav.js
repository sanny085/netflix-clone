import React,{ useState, useEffect } from 'react'
import './Nav.css'
import { FaUserCircle } from 'react-icons/fa';
import {auth} from './firebase';
import { Link } from "react-router-dom";


const Nav = () => {
   const [navAnima, setNavAnima] = useState(false); 
    
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
            <img className="float-start nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix brand logo"/>
         <Link to="/profile"> 
           <FaUserCircle className="text-light float-end rounded nav__avatar"/>
         </Link>
         </div>
      </div>
     </>
    )
}
export default Nav;

