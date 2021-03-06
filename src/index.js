import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-dropzone-component/styles/filepicker.css';
import 'dropzone/dist/min/dropzone.min.css';
//import 'react-bootstrap-multiselect/css/bootstrap-multiselect.css';
import './custom.css';

import characterApp from './reducers';

const store = createStore(characterApp
 /* ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */ 
);

ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
  document.getElementById('root')
);
