// AboutUsPage.js

import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

function AboutUs () {
  return (
    <div className="about-us-container">
      <h1>About TestShala</h1>
      <p>Welcome to TestShala, your go-to platform for JEE Main practice tests!</p>
      
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>At TestShala, our mission is to provide aspiring JEE Main students with high-quality practice tests to help them prepare effectively for the exam.</p>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <p>TestShala offers a wide range of practice tests designed by experienced educators, ensuring comprehensive coverage of JEE Main syllabus topics. Our user-friendly interface, detailed performance analytics, and customizable test options make us the ideal choice for JEE Main preparation.</p>
      </div>

      <div className="about-section">
        <h2>Our Team</h2>
        <p>Our team consists of passionate educators and technology enthusiasts dedicated to providing the best possible learning experience for our users.</p>
      </div>

      <div className="about-section">
        <h2>Contact Us</h2>
        <p>If you have any questions, suggestions, or feedback, feel free to contact us at contact@testshala.com. We'd love to hear from you!</p>
      </div>
    </div>
  );
}

export default AboutUs;
