import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './TaskLoop.css';

const TaskLoop = () => {
  const features = [
    "Post and find campus-related tasks",
    "Secure university email verification",
    "Real-time chat with task participants",
    "Build reputation with ratings"
  ];

  return (
    <div className="app-container">
      {/* Static Background Color */}
      <div className="static-background"></div>
      
      {/* Background and Wave Image */}
      <img src="background.png" alt="background" className='bg_img' />
      {/* Navigation Bar */}
      <nav className="nav-container">
        <div className="nav-content">
          <h1 className="logo">TaskLoop</h1>
          <div className="nav-links">
            <button className="nav-button">Home</button>
            <button className="nav-button">Tasks</button>
            <button className="nav-button">Leaderboard</button>
            <Link to="/login" className="login-button">Login</Link> {/* Ensure this points to /login */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-container">
        <h2 className="subtitle">Get Things Done on Campus</h2>
        <p className="description">
          Connect with fellow students to complete tasks, share resources, and make campus life easier.
        </p>

        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <span className="checkmark">✓</span>
              <strong>{feature}</strong>
            </div>
          ))}
        </div>

        <a href="#" className="learn-more-link">Learn more</a>
      </div>
    </div>
  );
};

export default TaskLoop;
