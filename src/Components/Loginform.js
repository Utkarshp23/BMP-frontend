import React from 'react'
import Register from './Register';

function Loginform()
{
    return(<div>
        <form>
        <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" pattern="[A-Za-z]{5,14}" title="userid length must be atleast 5 characters and at most 15 characters" required/><br/>
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/><br/>  
            <button type="submit">Login</button>
            <a href='Register.js'>New user?</a>    
        </form>
        <Router>
        <Link to="/register">register</Link>
        <Route exact path='/register' element={< Register />}></Route>
        </Router>
    </div>)
}
export default Loginform;
