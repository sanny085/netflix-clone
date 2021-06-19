import React,{ useState, useEffect } from 'react';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {auth} from './firebase';
import { useDispatch, useSelector  } from 'react-redux';

import './App.css';
import { login, logout, selectUser } from './features/userSlice';
 


function App() {
  const user = useSelector(selectUser);
  
  const dispatch = useDispatch();

  useEffect( ()=> {
    const unSubscribe =  auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in  
        var loginUser = userAuth.email;
        console.log("App User Login",loginUser);

        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email
        }));
         
      } else {
        // User is signed out
        dispatch(logout)
      }
    });
    
    // cleanup funtion(when component will unmount we don't need to duplicate value)
   return () => {
    unSubscribe();
   }

  },[]);

  return (
    <div className="app">
      {
       !user ? (
        <LoginScreen />
       ) : (
       <Router>
         <Switch> 
           <Route path="/">
              <HomeScreen/>
           </Route>
         </Switch>
       </Router> 
       )
      }
    </div>
  );
}

export default App;


