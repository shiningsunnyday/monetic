import React from 'react';
import './App.css';
import FrontPage from './pages/frontpage.jsx';
import Donate from './pages/donate.jsx';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={FrontPage}/>
          <Route exact path="/donate" component={Donate}/>
          <Redirect to="/404"/>
        </Switch>
    </Router>


  );
}

export default App;
