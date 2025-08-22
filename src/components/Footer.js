import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>K VENUS LLC</h3>
            <p>Professional business solutions and consulting services to help your business thrive.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Business Info</h4>
            <p><strong>Established:</strong> 2025</p>
            <p><strong>Location:</strong> Fort Walton Beach, FL</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 K VENUS LLC. All rights reserved. | EIN: 39-2819775</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
