import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-success'>
        <a className='navbar-brand' href='/'>
          <h3>BOOK MY PROPERTY</h3>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarText'
          style={{ marginLeft: '1000px' }}
        >
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/login'>
                {/* <Login/> */}
                LogIn
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='/signup'>
                SignUp
              </a>
            </li>
          </ul>

          <span className='navbar-text'>
            <br />
            <br />
          </span>
        </div>
      </nav>
    </div>
  );
}

export default App;
