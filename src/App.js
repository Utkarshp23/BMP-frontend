import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          {/* <Navigate to='/login' /> */}
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
