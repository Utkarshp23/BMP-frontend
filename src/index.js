// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        {/* <Route exact path='/' element={<App />}></Route> */}
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);