import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Component/Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';

import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store = {store}>
    <Routes />
  </Provider>, document.getElementById('root')
);

