import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

function Login() {
  // React States
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  // const errors = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };

  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();

  //   var { uname, pass } = document.forms[0];

  //   // Find user login info
  //   const userData = database.find((user) => user.username === uname.value);

  //   // Compare user info
  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };

  // // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

  // JSX code for login form
  // const renderForm = (
  //   <div className="form">
  //     <form onSubmit={handleSubmit}>
  //       <div className="input-container">
  //         {/* <label>Username </label> */}
  //         <input type="text" name="uname" required placeholder="Username" />
  //         {renderErrorMessage("uname")}
  //       </div>
  //       <div className="input-container">
  //         {/* <label>Password </label> */}
  //         <input type="password" name="pass" required placeholder="Password" />
  //         {renderErrorMessage("pass")}
  //       </div>
  //       <div className="button-container">
  //         <input type="submit" />
  //       </div>
  //     </form>
  //   </div>
  // );

  // return (
  //   <div className="form-container">
  //     <div className="login-form">
  //       <div className="title"><h5>Login</h5></div>
  //       {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
  //     </div>
  //   </div>
  // );

  const init = {
    username: '',
    password: ''
  };

  var reducer = (state, action) => {
    switch (action.type) {
      case 'logincheck':
        return { ...state, [action.field]: action.val };
    }
  };

  const [user, dispatch] = useReducer(reducer, init);
  const [msg,setMsg] = useState("");

  const navigate=useNavigate();



<<<<<<< HEAD
 return (
    <div className="App">
      <div className="login-form">
      <div className="title">Sign In</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <h1>vishal</h1>
    </div>
  );
}
=======
  
  var logincheck = (u) => {
    u.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    fetch('http://localhost:8080/logincheck', options)
      .then((res) => {
        if(res.ok)
        {
          return res.text();
        }
        else
        {
          throw new Error("server Error")
        }
      })

      .then(text => text.length ? JSON.parse(text) : {})
      .then(obj => {
        if(Object.keys(obj).length === 0)
        {
          setMsg("Invalid username/password")
        }
        else
        {
          if(obj.ucatid_fk === 1)
          {
            navigate("/CustHomepage");
          }
          else if(obj.ucatid_fk === 2)
          {
            navigate("/OwnerHomepage");
          }
          else if(obj.ucatid_fk === 3)
          {
            navigate("/AdminHomepage");
          }
        }
      })
      
  };
  return(
  <div className="form-container">
    <div className="login-form">
      <div className="form">
        <form>
          <div className="input-container">
            <input type="text" name="username" value={user.username} required placeholder="Username"
            onChange={(u) => {
              dispatch({
                type: 'logincheck',
                field: u.target.name,
                val: u.target.value,
              });
            }} />
          </div>
          <div className="input-container">
            <input type="password" name="password" value={user.password} required placeholder="Password" 
            onChange={(u) => {
              dispatch({
                type: 'logincheck',
                field: u.target.name,
                val: u.target.value,
              });
            }} />
          </div>
          <div className="button-container">
            <input type="submit"
            onClick={(u) => {
              logincheck(u);
            }}/>
          </div>
        </form>
        <p>{msg}</p>
      </div>
      </div>
      
      </div>
    );
  }

export default Login;
>>>>>>> main
