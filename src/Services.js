import React from 'react';
import '../src/Services.css';

const Services = () => {
  return (
    <section id="services" className="services-container">
      <h2>Our AI Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Smart Robotics</h3>
          <p>AI-driven robotic systems for automated manufacturing.</p>
        </div>
        <div className="service-card">
          <h3>AI Analytics</h3>
          <p>Predictive analytics to optimize industrial workflows.</p>
        </div>
        <div className="service-card">
          <h3>AI Chatbots</h3>
          <p>Intelligent virtual assistants to automate customer support and engagement.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
