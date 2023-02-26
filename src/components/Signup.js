import React, { useReducer } from 'react';

export default function Register() {
  const init = {
    username: '',
    password: '',
    fname: '',
    lname: '',
    email: '',
    contact: '',
    usertype: '',
    addline1: '',
    addline2: '',
    state: '',
    city: '',
    pincode: '',
  };

  var reducer = (state, action) => {
    switch (action.type) {
      case 'register':
        return { ...state, [action.field]: action.val };
    }
  };

  const [user, dispatch] = useReducer(reducer, init);

  var register = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    fetch('http://localhost:8080/createruser', options)
      .then((res) => res.text())
      .then((msg) => {
        // setMsg(msg);
        console.log(msg);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <label>Username : </label>
        <input
          type='text'
          placeholder='Enter Username'
          name='username'
          pattern='[A-Za-z]{5,14}'
          title='userid length must be atleast 5 characters and at most 15 characters'
          required
          onChange={(e) => {
            dispatch({
              type: 'register',
              field: e.target.name,
              val: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <label>Password : </label>
        <input
          type='password'
          placeholder='Enter Password'
          name='password'
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
          title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
          required
          onChange={(e) => {
            dispatch({
              type: 'register',
              field: e.target.name,
              val: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <label>First Name : </label>
        <input
          type='text'
          placeholder='Enter firstname'
          name='fname'
          pattern='[A-Za-z]{5,14}'
          title='fname length must be atleast 5 characters and at most 15 characters'
          required
          onChange={(e) => {
            dispatch({
              type: 'register',
              field: e.target.name,
              val: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <label>Last Name : </label>
        <input
          type='text'
          placeholder='Enter last name'
          name='lname'
          pattern='[A-Za-z]{5,14}'
          title='lname length must be atleast 5 characters and at most 15 characters'
          required
          onChange={(e) => {
            dispatch({
              type: 'register',
              field: e.target.name,
              val: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <label>Email : </label>
        <input
          type='email'
          placeholder='Enter email'
          name='email'
          required
          onChange={(e) => {
            dispatch({
              type: 'register',
              field: e.target.name,
              val: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <label>Contact Number : </label>
        <input
          type='number'
          placeholder='Enter contact no'
          name='contact'
          pattern='[0-9]{10}'
          title='Enter valid contact no with 10 digit not prefix'
          required
          onChange={(e) => {
            dispatch({
              type: 'register',
              field: e.target.name,
              val: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <label>Select User type : </label>
        <select
          className='form-control form-control-sm'
          onChange={(e) => {
            dispatch({
              type: 'register',
              field: e.target.name,
              val: e.target.value,
            });
          }}
        >
          <option>Owner</option>
          <option>Customer</option>
        </select>
        <div className='form-group'>
          <label htmlFor='inputAddress'>Address1</label>
          <input
            type='text'
            className='form-control'
            id='inputAddress'
            placeholder='1234 Main St'
            required
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='inputAddress2'>Address 2</label>
          <input
            type='text'
            className='form-control'
            id='inputAddress2'
            placeholder='Apartment, studio, or floor'
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='inputCity'>City</label>
            <input
              type='text'
              className='form-control'
              id='inputCity'
              onChange={(e) => {
                dispatch({
                  type: 'register',
                  field: e.target.name,
                  val: e.target.value,
                });
              }}
            />
          </div>
          <div className='form-group col-md-4'>
            <label htmlFor='inputState'>State</label>
            <select
              id='inputState'
              className='form-control'
              onChange={(e) => {
                dispatch({
                  type: 'register',
                  field: e.target.name,
                  val: e.target.value,
                });
              }}
            >
              <option defaultValue={''}>Choose...</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
              <option>Madhya-Prades</option>
            </select>
          </div>
          <div className='form-group col-md-2'>
            <label htmlFor='inputZip'>Zip</label>
            <input
              type='text'
              className='form-control'
              id='inputZip'
              onChange={(e) => {
                dispatch({
                  type: 'register',
                  field: e.target.name,
                  val: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <br />
        <button
          type='submit'
          className='btn btn-primary'
          onClick={(e) => {
            register(e);
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
