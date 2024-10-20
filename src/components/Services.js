import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>AI Monitoring</h3>
          <p>Continuous monitoring of e-waste disposal with AI-powered analysis.</p>
        </div>
        <div className="service-card">
          <h3>Recycling Solutions</h3>
          <p>Efficient recycling services for all types of electronic waste.</p>
        </div>
        <div className="service-card">
          <h3>Compliance Assistance</h3>
          <p>Ensure your organization complies with environmental regulations.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
