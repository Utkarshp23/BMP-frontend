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
import Signup from
  './components/Signup';
import Home from './components/Home'
import CustHomepage from './components/customer/CustHomepage';
import OwnerHomepage from './components/owner/OwnerHomepage';
import AdminHomepage from './components/admin/AdminHomepage';
import Logout from './components/Logout';
import AddProperty from './components/owner/AddProperty';
import OwnerProperties from './components/owner/OwnerProperties';
import PropertyPage from './components/pages/PropertyPage';
import UpdateProp from './components/owner/UpdateProp';
import Wishlist from './components/customer/Wishlist';

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
            <Route exact path='/CustHomepage' element={<CustHomepage />}></Route>
            <Route exact path='/OwnerHomepage' element={<OwnerHomepage />}></Route>
            <Route exact path='/AdminHomepage' element={<AdminHomepage />}></Route>
            <Route exact path='/logout' element={<Logout />}></Route>
            <Route exact path='/addproperty' element={<AddProperty />}></Route>
            <Route exact path='/myproperties' element={<OwnerProperties />}></Route>
            <Route exact path='/propertypage' element={<PropertyPage />}></Route>
            <Route exact path='/updateprop' element={<UpdateProp />}></Route>
            <Route exact path='/mywishlist' element={<Wishlist />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;