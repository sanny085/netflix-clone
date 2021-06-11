import React from 'react';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  const user = {
    name : 'Sanny'
  };
  return (
    <div className="app">
      {
       !user ? (
        <ProfileScreen />
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
