// src/App.js
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './login.css';

function UserLogin () {
  const [values, setValues] = useState({
    username: '',
    password: ''
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
    // Navigate to the dashboard directly without validation
    navigate("/userdashboard");
  }

  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              placeholder="Enter username"
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
          <button type="submit">
            Continue
          </button>
          <p>Don't have an account?</p>
          <Link to="/usersignup">Create an account</Link>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
