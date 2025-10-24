import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './AuthPage.css';

function LoginPage() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'Donor'; // Default to Donor if no role is specified
  const roleName = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">{roleName} Login</h1>
        <p className="auth-subtitle">Welcome back! Please enter your details.</p>
        
        <form className="auth-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-button">Log In</button>
        </form>

        <p className="auth-switch-link">
          Don't have an account? <Link to={`/signup?role=${role}`}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;