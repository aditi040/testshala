// src/App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from '../signupvalidation';
import './Signup.css';

function Signup() {
 
    const [values, setValues] = useState({
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:''
    })
  const navigate =useNavigate();
  const [errors,setErrors]=useState({})
  const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]: [event.target.value]}))
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(Validation(values));
    if( errors.username==="" && errors.password==="" && errors.firstname==="" && errors.lastname==="" && errors.email==="" && errors.phone===""){
      // axios.post('/signup',values)
      // .then(res => {
      //   navigate("/login")
      // })
      // .catch(err => console.log(err));
      navigate("/login")
    }
  }
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            placeholder='Enter username'
            name='username'
            onChange={handleInput}
          />
          <br/>
          {errors.username && <span className='text-danger'> {errors.username}</span>}
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter password"
            name='password'
            onChange={handleInput}
          />
          <br/>
          {errors.password && <span className='text-danger'> {errors.password}</span>}
        </label>
        <label>
          First name:
          <input
            type="text"
            placeholder="Enter your first name"
            name='firstname'
            onChange={handleInput}
          />
          <br/>
          {errors.firstname && <span className='text-danger'> {errors.firstname}</span>}
        </label>
        <label>
          Last name:
          <input
            type="text"
            placeholder="Enter your last name"
            name='lastname'
            onChange={handleInput}
          />
          <br/>
          {errors.lastname && <span className='text-danger'> {errors.lastname}</span>}
        </label>
        <label>
          Email id:
          <input
            type="email"
            placeholder="Enter email id"
            name='email'
            onChange={handleInput}
          />
          <br/>
          {errors.email && <span className='text-danger'> {errors.email}</span>}
        </label>
        <label>
          Phone no.:
          <input
            type="number"
            placeholder="Enter phone no."
            name='phone'
            onChange={handleInput}
          />
          <br/>
          {errors.phone && <span className='text-danger'> {errors.phone}</span>}
        </label>
        <button type="submit" >
          Sign Up
        </button>
      </form>
    </div>
  );
  };

export default Signup;
