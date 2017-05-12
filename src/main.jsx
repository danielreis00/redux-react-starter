import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './utils/ConfigureStore';

const store = configureStore();

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('app')
);
