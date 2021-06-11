import React from 'react';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  const user = null;
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
