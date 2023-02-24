import React from 'react';
function Loginform()
{
    return (<div>
        <form>
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" pattern="(?=.*[a-z])(?=.*[A-Z].{4,12})" title='Username must contain 4 to 12 charecters' />
        <br/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
        <br/>
        
        <button type="submit">Login</button>
    
        </form>
    </div>)
}

export default Loginform;