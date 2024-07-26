import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Simulate successful sign-up
    console.log('Sign-up successful');
    navigate('/home');
  };

  return (
    <div className="signup-container">
      <div className="signup-brand">Sign Up</div>
      <div className="heading">Join us today!</div>
      <div className="login-link">Already have an account? <a href="/">Log in</a></div>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default SignUp;
