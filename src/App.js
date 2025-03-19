// App.js
import React from 'react';
import Navbar from './Navbar'; // Import Navbar
import HeroSection from './HeroSection';
import Services from './Services'; // Import Services
import Chatbots from './Chatbots'; // Import Chatbots
import ContactForm from './ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Navigation Bar */}
      <HeroSection />  {/* Hero Section */}
      <Services />  {/* Services Section */}
      <Chatbots />  {/* AI Chatbots Section */}
      <ContactForm />  {/* Contact Form */}
    </div>
  );
}

export default App;
