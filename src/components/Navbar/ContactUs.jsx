// ContactUsPage.js

import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Have questions, suggestions, or feedback? Reach out to us!</p>

      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p>Email: contact@testshala.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 TestShala Street, TestCity, TestCountry</p>
      </div>
    </div>
  );
}

export default ContactUs;
