import React,{ useEffect } from 'react';

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
  const user = null;
  
  useEffect( ()=> {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.user.email;
        console.log("User Login",uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
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


