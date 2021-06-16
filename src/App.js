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

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect( ()=> {
    const unSubscribe =  auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in 
        console.log("App login",user);
        var loginUser = user.email;
        console.log("App User Login",loginUser);
        setUser(user.email); 
      } else {
        // User is signed out
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


