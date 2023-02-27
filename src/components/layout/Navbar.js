import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import {BsBuilding} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='nav_container navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-white rounded'>
      <Link className='navbar-brand' to='/'>
        <BsBuilding/>
        <h5>Book My Property</h5>
      </Link>

      <div className='nav_buttons'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/signup'>
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
