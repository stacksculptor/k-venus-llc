import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to K VENUS LLC</h1>
          <p className="hero-subtitle">Professional Business Solutions & Consulting Services</p>
          <p className="hero-description">
            Your trusted partner for business growth and success. We provide comprehensive business solutions tailored to your needs.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <i className="fas fa-building"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 