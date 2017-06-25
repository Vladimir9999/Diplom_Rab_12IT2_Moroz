import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Auth from './Auth/auth';
import addUser from './Auth/addUser';
import Home from './Home';
import Workers from './TabsPanel/Workers';
import CarDriver from './TabsPanel/CarDriver';
import Transport from './TabsPanel/Transport';
import addTransport from './TabsPanel/addTransport';




function Routes(props) {
  return (
    <Router history = {browserHistory}>
      <Route path = '/' component={App}>
        <IndexRoute component={Auth} />
        <Route path = 'user_registration/:user_type' component={addUser}/>
        <Route path = 'home' component={Home}/>
        <Route path = 'workers' component={Workers}/>
        <Route path = 'workers/:id' component={Home}/>
        <Route path = 'car_drivers' component={CarDriver}/>
        <Route path = 'transport' component={Transport}/>
        <Route path = 'addTransport' component={addTransport}/>
      </Route>
    </Router>
  );
}

export default Routes;
