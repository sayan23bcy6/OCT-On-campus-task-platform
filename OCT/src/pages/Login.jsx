import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import './Login.css';

const TaskLoopLogin = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="background_1.png" alt="Illustration" className="login-image" />
        <h1 className="logo">TaskLoop</h1>
      </div>
      
      <div className="login-right">
        <h1 className="welcome-back">Welcome back</h1>
        <p className="subtext">Please enter your details</p>
        
        <form className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="example@iiitkottayam.ac.in" className="form-input" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="More than 6 characters" className="form-input" />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember for 30 days
            </label>
            <a href="#forgot" className="forgot-password">Forgot password</a>
          </div>

          <button type="submit" className="signin-button">Sign in</button>
        </form>

        <p className="signup-text">
          Don't have an account?{' '}
          <Link 
            to="/register" 
            className="signup-link" 
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            Sign up
          </Link> {/* Updated to use Link */}
        </p>
      </div>
    </div>
  );
};

export default TaskLoopLogin;