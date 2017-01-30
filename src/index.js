import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import kindredlist from './kindred.js';
import initFormData from './initFormData.js';
import backstory from './backstory.js';
import talentlist from './talentlist.js';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
 <Provider store={store}>
  <App initFormData={initFormData}
       backstory={backstory}
       kindredlist={kindredlist}
       talentlist={talentlist}
  />
 </Provider>,
  document.getElementById('root')
);
