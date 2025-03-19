import React from 'react';
import '../src/Chatbots.css';

const Chatbots = () => {
  return (
    <section id="chatbots" className="chatbot-container">
      <h2>AI Chatbot Solutions</h2>
      <p>BotPilotAI’s intelligent chatbots streamline customer interactions, automate FAQs, and enhance user experience with AI-driven conversations.</p>
      
      <div className="chatbot-features">
        <div className="feature">
          <h3>24/7 Customer Support</h3>
          <p>Never miss a customer query with AI-powered chat assistance.</p>
        </div>
        <div className="feature">
          <h3>Lead Generation</h3>
          <p>Engage website visitors and capture leads automatically.</p>
        </div>
        <div className="feature">
          <h3>Seamless Integrations</h3>
          <p>Connect with CRMs, e-commerce platforms, and automation tools.</p>
        </div>
      </div>
    </section>
  );
};

export default Chatbots;
