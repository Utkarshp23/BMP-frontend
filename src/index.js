import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './components/store';

// let trgURL;
// if (process.env.NODE_ENV == 'production') {
//   trgURL = process.env.REACT_APP_REST_URL;
// } else {
//   trgURL = process.env.REACT_APP_LOCAL_URL;
// }

window.$restUrl = process.env.REACT_APP_REST_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
