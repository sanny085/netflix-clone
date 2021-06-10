import React from 'react';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="app">
     
     <Router>
       <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/">
              <HomeScreen/>
          </Route>
        </Switch>
      </Router>  

    </div>
  );
}

export default App;
