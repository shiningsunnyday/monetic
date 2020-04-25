import React from 'react';
import './App.css';
import FrontPage from './pages/frontpage.jsx';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={FrontPage}/>
          <Redirect to="/404"/>
        </Switch>
    </Router>

    
  );
}

// const express = require('express');

export default App;
