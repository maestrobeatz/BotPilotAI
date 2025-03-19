import React from 'react';
import '../src/HeroSection.css';
import background from '../src/background.jpg';

const HeroSection = () => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Welcome to BotPilotAI</h1>
        <p className="hero-subtitle">AI-powered automation for the future</p>
      </div>
    </div>
  );
};

export default HeroSection;
