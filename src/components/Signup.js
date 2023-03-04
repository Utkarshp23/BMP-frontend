import React, { useReducer, useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"

export default function Signup() {

  const navigate = useNavigate();


  useEffect(() => {
    var userSel = document.getElementById('usertype');
    var queSel = document.getElementById('secque');

    fetch('http://localhost:8080/getusertypes')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);

        res.map((v) => {
          var opt = document.createElement('option');
          opt.value = v.ucatid;
          opt.textContent = v.cattype;
          userSel.appendChild(opt);
        });
      });

    fetch('http://localhost:8080/getsecque')
      .then((res) => res.json())
      .then((res) => {
        res.map((q) => {
          var opt1 = document.createElement('option');
          opt1.value = q.qid;
          opt1.textContent = q.question;
          queSel.appendChild(opt1);
        });
      });
  }, []);

  const init = {
    username: '',
    password: '',
    fname: '',
    lname: '',
    email: '',
    contact: '',
    ucatid_fk: '',
    address: {
      addline1: '',
      addline2: '',
      state: '',
      city: '',
      pincode: '',
    },
    qid_fk: '',
    ans: '',
  };

  const navigateToLogin = () => {
    navigate('/login');
  };
  
  var reducer = (state, action) => {
    switch (action.type) {
      case 'register':
        return {
          ...state,
          [action.field]: action.val,
          // [action.field]: { ...state[action.field],[action.field]: action.val },
          address: {
            ...state.address,
            [action.field]: action.val,
          },
          // [action.field]: action.val,
          // address: {
          //   ...state.address,
          //   [action.field]: action.val,
          // },
        };
    }
  };

  // {...state , [action.fld]: {  ...state[action.fld],value: action.val, error: action.error, valid: action.valid, touched: action.touched}}

  const [user, dispatch] = useReducer(reducer, init);

  var register = (e) => {
    e.preventDefault();
    // console.log(`ucatid_fk:${user.ucatid_fk}`);
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    // console.log(`ucatid_fk:${user.ucatid_fk}`);
    fetch('http://localhost:8080/signup', options)
      .then((res) => 
      {
        if(res.ok)
        {
          navigate("/login")
        }
      })
      .then((msg) => {
        // setMsg(msg);
        // console.log(msg);
      })
      // .then((msg) => {
      //   // setMsg(msg);
      //   // console.log(msg);
      // })
      .catch((err) => console.log(err));
  };

  return (
    <div className='form-container'>
      <form className='login-form signup-form'>
        <div className='mb-3'>
          <h4>Signup</h4>
        </div>
        <div className='mb-3'>
          {/* <label htmlFor='username'>Username : </label> */}
          <input
            type='text'
            placeholder='Enter Username'
            className='form-control form-control-sm'
            name='username'
            id='username'
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
        </div>
        <div className='mb-3'>
          <input
            type='password'
            placeholder='Enter Password'
            name='password'
            id='pwd'
            className='form-control form-control-sm'
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
        </div>
        <div className='mb-3'>
          <input
            type='text'
            placeholder='Enter firstname'
            name='fname'
            id='fname'
            className='form-control form-control-sm'
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
        </div>
        <div className='mb-3'>
          <input
            type='text'
            placeholder='Enter last name'
            name='lname'
            id='lname'
            className='form-control form-control-sm'
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
        </div>
        <div className='mb-3'>
          <input
            type='email'
            placeholder='Enter email'
            name='email'
            id='email'
            className='form-control form-control-sm'
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
        <div className='mb-3'>
          <input
            type='number'
            placeholder='Enter contact no'
            name='contact'
            id='contact'
            className='form-control form-control-sm'
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
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Select User type</label>
          <select
            className='form-control form-control-sm'
            name='ucatid_fk'
            id='usertype'
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          >
            <option defaultValue={''}>Choose...</option>
            {/* <option>Owner</option>
            <option>Customer</option> */}
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor='inputAddress'>Address1</label>
          <input
            type='text'
            className='form-control form-control-sm'
            name='addline1'
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
        <div className='mb-3'>
          <label htmlFor='inputAddress2'>Address 2</label>
          <input
            type='text'
            className='form-control form-control-sm'
            name='addline2'
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
          <div className='mb-3 col-md-6'>
            <label htmlFor='inputState'>State</label>
            <select
              name='state'
              id='inputState'
              className='form-control form-control-sm'
              required
              onChange={(e) => {
                dispatch({
                  type: 'register',
                  field: e.target.name,
                  val: e.target.value,
                });
              }}
            >
              <option defaultValue={''}>Choose...</option>
              <option value="AN">Andaman and Nicobar Islands</option>
              <option value="AP">Andhra Pradesh</option>
              <option value="AR">Arunachal Pradesh</option>
              <option value="AS">Assam</option>
              <option value="BR">Bihar</option>
              <option value="CH">Chandigarh</option>
              <option value="CT">Chhattisgarh</option>
              <option value="DN">Dadra and Nagar Haveli</option>
              <option value="DD">Daman and Diu</option>
              <option value="DL">Delhi</option>
              <option value="GA">Goa</option>
              <option value="GJ">Gujarat</option>
              <option value="HR">Haryana</option>
              <option value="HP">Himachal Pradesh</option>
              <option value="JK">Jammu and Kashmir</option>
              <option value="JH">Jharkhand</option>
              <option value="KA">Karnataka</option>
              <option value="KL">Kerala</option>
              <option value="LA">Ladakh</option>
              <option value="LD">Lakshadweep</option>
              <option value="MP">Madhya Pradesh</option>
              <option value="MH">Maharashtra</option>
              <option value="MN">Manipur</option>
              <option value="ML">Meghalaya</option>
              <option value="MZ">Mizoram</option>
              <option value="NL">Nagaland</option>
              <option value="OR">Odisha</option>
              <option value="PY">Puducherry</option>
              <option value="PB">Punjab</option>
              <option value="RJ">Rajasthan</option>
              <option value="SK">Sikkim</option>
              <option value="TN">Tamil Nadu</option>
              <option value="TG">Telangana</option>
              <option value="TR">Tripura</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="UT">Uttarakhand</option>
              <option value="WB">West Bengal</option>
            </select>
          </div>
          <div className='row'>
            <div className='mb-3 col-md-6'>
              <label htmlFor='inputCity'>City</label>
              <input
                type='text'
                className='form-control form-control-sm'
                name='city'
                id='inputCity'
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
            <div className='mb-3 col-md-6'>
              <label htmlFor='inputZip'>Pincode</label>
              <input
                type='text'
                className='form-control form-control-sm'
                name='pincode'
                id='inputZip'
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
          </div>
        </div>
        <div className='mb-3 form-row'>
          <label htmlFor='secque'>Select security question</label>
          <select
            name='qid_fk'
            id='secque'
            className='form-control form-control-sm'
            required
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          >
            <option defaultValue={''}>Choose...</option>
          </select>
        </div>
        <div className='mb-3 form-row'>
          <input
            type='text'
            className='form-control form-control-sm'
            name='ans'
            id='ans'
            placeholder='Enter answer'
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
