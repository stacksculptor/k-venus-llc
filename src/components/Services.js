import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-chart-line',
      title: 'Business Consulting',
      description: 'Strategic business planning and growth strategies to help your business reach its full potential.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Process Optimization',
      description: 'Streamline your business operations and improve efficiency with our proven methodologies.'
    },
    {
      icon: 'fas fa-users',
      title: 'Team Development',
      description: 'Build and develop high-performing teams that drive your business success.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation Solutions',
      description: 'Stay ahead of the competition with innovative business solutions and strategies.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive business solutions tailored to your needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 