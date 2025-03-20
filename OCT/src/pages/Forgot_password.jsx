import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link
import './Forgot_password.css';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
  };

  return (
    <div className="app">
      <div className="container">
        <div className="left-section">
          <div className="logo">TaskLoop</div>
          <img src="background_3.png" alt="background" className="background_3" />
        </div>

        <div className="right-section">
          <h1>Forgot something?</h1>
          <p className="description">
            Enter your email or phone number to reset your password
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Phone number"
              className="input"
            />
            
            <Link to="/login" className="back-link">
              Back to login?
            </Link>

            <button type="submit" className="submit-button">
              Send reset link
            </button>

            <p className="info-text">
              *If this email/number exists, you'll receive a password reset link
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;