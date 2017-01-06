import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import kindredlist from './kindred.js';
import initFormData from './initFormData.js';

ReactDOM.render(
  <App initFormData={initFormData} kindredlist={kindredlist}/>,
  document.getElementById('root')
);
