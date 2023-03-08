import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { BsBuilding } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slice';

const Navbar = () => {
  const myState = useSelector((state) => state.logged);
  console.log(
    myState.loggedIn + '//' + myState.userId + '//' + myState.userType
  );

  return (
    <nav className='nav_container navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-white rounded'>
      <Link className='navbar-brand' to='/'>
        <BsBuilding />
        <h5>Book My Property</h5>
      </Link>

      <div className='nav_buttons'>
        {!myState.loggedIn ? (
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
        ) : (
          (myState.userType === 1 && (
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Manage properties
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Validate Accounts
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Validate Properties
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/logout'>
                  Logout
                </Link>
              </li>
            </ul>
          )) ||
          (myState.userType === 2 && (
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/myproperties'>
                  My properties
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Property Requests
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  My Deals
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/logout'>
                  Logout
                </Link>
              </li>
            </ul>
          )) ||
          (myState.userType === 3 && (
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-item' to='/'>
                  Wishlist
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-item' to='/'>
                  My Requests
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/logout'>
                  Logout
                </Link>
              </li>
            </ul>
          ))
        )}
      </div>
    </nav>
  );
};

export default Navbar;
