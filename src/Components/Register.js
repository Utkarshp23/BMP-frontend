import React from 'react'

export default function Register()
{
    return(
        <div>
            <form>
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" pattern="[A-Za-z]{5,14}" title="userid length must be atleast 5 characters and at most 15 characters" required/><br/>
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/><br/>  
            <label>fname : </label>   
            <input type="text" placeholder="Enter firstname" name="fname" pattern="[A-Za-z]{5,14}" title="fname length must be atleast 5 characters and at most 15 characters" required/><br/>
            <label>lname : </label>   
            <input type="text" placeholder="Enter last name" name="lname" pattern="[A-Za-z]{5,14}" title="lname length must be atleast 5 characters and at most 15 characters" required/><br/>  
            <label>email : </label>   
            <input type="email" placeholder="Enter email" name="email" required/><br/>
            <label>contact : </label>   
            <input type="number" placeholder="Enter contact no" name="contact" pattern="[0-9]{10}" title="Enter valid contact no with 10 digit not prefix" required/><br/>
            <button type="submit">Register</button>
                
        </form>
        </div>
    )
}