import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          {/* <Home/> */}
          <Routes>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;