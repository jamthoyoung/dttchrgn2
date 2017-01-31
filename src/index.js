import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
  document.getElementById('root')
);
