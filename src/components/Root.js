import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from '../containers/App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={App} />
    </Router>
  </Provider>
);

export default Root;
