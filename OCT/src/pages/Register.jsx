import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    otp: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="left-section">
          <h1>TaskLoop</h1>
          <img src="background_2.png" alt="Team collaboration" className="illustration" />
        </div>

        <div className="right-section">
          <div className="header">
            <h2>Create an account</h2>
            <p>
              Already have an account? <Link to="/login" className="login-link">Log in</Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
            </div>

            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

            <div className="otp-section">
              <input type="text" name="otp" placeholder="OTP" value={formData.otp} onChange={handleChange} />
              <button type="button" className="resend-btn">Resend OTP</button>
            </div>

            <div className="input-group">
              <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
              <input type="password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} />
            </div>

            <input type="tel" name="mobile" placeholder="Enter Mobile Number" value={formData.mobile} onChange={handleChange} />

            <div className="agreement">
              <input type="checkbox" name="agreed" id="agreed" checked={formData.agreed} onChange={handleChange} />
              <label htmlFor="agreed">
                I agree to the <a href="#" className="terms-link">Terms & Conditions</a>
              </label>
            </div>

            <button type="submit" className="submit-btn">
              <UserPlus size={20} />
              <span>Create account</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;