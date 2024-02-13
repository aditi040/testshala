// src/App.js
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Validation from '../loginvalidation';
import './login.css';

function Login () {
  const [values, setValues] = useState({
  username:'',
  password:''
  })
  const [errors,setErrors]=useState({})
  const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]: [event.target.value]}))
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(Validation(values));
    if( errors.username==="" && errors.password===""){
      // axios.post('//https:localhost:9333/signup',values)
      // .then(res => {
      //   navigate("/")
      // })
      // .catch(err => console.log(err));
      // navigate("/login")
    }
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
        <button type="submit" >
          Continue
        </button>
        <p>Don't have an account?</p><Link to="/signup">Create an account</Link>
      </form>
    </div>
    </div>
  );
};

export default Login;
