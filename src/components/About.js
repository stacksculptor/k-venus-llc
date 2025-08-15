import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About K VENUS LLC</h2>
          <p>Your trusted business partner since 2025</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              K VENUS LLC is a professional business entity established in 2025, providing comprehensive business solutions and consulting services. As a Limited Liability Company, we offer our clients the flexibility and protection they need to succeed in today's competitive business environment.
            </p>
            
            <h3>Our Leadership</h3>
            <p>
              Under the leadership of Brandon Johnson as the sole member, K VENUS LLC brings years of business expertise and a commitment to excellence. We understand the challenges that businesses face and provide strategic solutions to help them thrive.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              To provide exceptional business services that empower our clients to achieve their goals, while maintaining the highest standards of professionalism and integrity.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">2025</div>
              <div className="stat-label">Established</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Focused</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 