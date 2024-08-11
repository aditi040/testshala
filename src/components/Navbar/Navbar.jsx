import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar= () => {
  return (
    <div className="home-page">
     <nav className="navbar">
        <div className="logo">
       <img src="logo 3.png" alt="Logo" />
        </div>
        <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Teacher</Link>
        <Link to="/userlogin">Student</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/contactus">Contact us</Link>
        </div>
      </nav>

      <div className="content-section">
      <div className="centered-text">
        <h1>Welcome to TestShala</h1>
        <p>Unlock your Potential and conquer the exam.</p>
        <button>Get Started</button>
      </div>
        {/* <video className="background-video" autoPlay muted loop>
        <source src="pexels-mikhail-nilov-7534239 (Original).mp4" type="video/mp4"/ >
</video> */}
        {/* You can add more content here */}
        <img className="background-img" src="learning-4264032_1280.jpg" alt="img"></img>
      </div>
      <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 TestShala. All Rights Reserved.</p>
        <div className="social-icons">
          {/* Add your social media icons or links here */}
          {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" />
          </a> */}
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
    </div>
  );


}
export default Navbar;