import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const userData = {
    email: 'vijay@gmail.com',
    password: '123'
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userData.email && password === userData.password) {
      setErrorMessage('');
      navigate('/home'); 
    } else {
      setErrorMessage('Login failed: Incorrect email or password');
    }
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <div className="login-container">
      <div className="login-brand">Log In</div>
      <div className="heading">We're glad to see you again!</div>
      <div className="log">Don't have an account? <a href="/signup">Sign up</a></div>
      <div className="forgot"> Forgot Password?<a href="/forgot">Lost your password</a></div>

      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div className="login-remember">
            <div className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <p>Remember me</p>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="OR">OR</div>
        <div className="social-buttons">
          <button className="facebook-button">Facebook</button>
          <button className="google-button">Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
