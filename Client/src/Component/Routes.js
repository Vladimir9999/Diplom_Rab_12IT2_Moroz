import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Auth from './Auth/auth';
import RegUser from './Auth/RegUser';

function Routes(props) {
  return (
    <Router history = {browserHistory}>
      <Route path = '/' component={App}>
        <IndexRoute component={Auth} />
        <Route path = 'user_registration' component={RegUser}/>
      </Route>
    </Router>
  );
}

export default Routes;
