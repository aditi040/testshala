// src/App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function UserSignup() {
 
  const [values, setValues] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to the login page directly without validation
    navigate("/userlogin");
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
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter password"
            name='password'
            onChange={handleInput}
          />
        </label>
        <label>
          First name:
          <input
            type="text"
            placeholder="Enter your first name"
            name='firstname'
            onChange={handleInput}
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            placeholder="Enter your last name"
            name='lastname'
            onChange={handleInput}
          />
        </label>
        <label>
          Email id:
          <input
            type="email"
            placeholder="Enter email id"
            name='email'
            onChange={handleInput}
          />
        </label>
        <label>
          Phone no.:
          <input
            type="number"
            placeholder="Enter phone no."
            name='phone'
            onChange={handleInput}
          />
        </label>
        <button type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default UserSignup;
