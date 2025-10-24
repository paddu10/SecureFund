import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './AuthPage.css';

function SignupPage() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'Donor';
  const roleName = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Create {roleName} Account</h1>
        <p className="auth-subtitle">Join us to make a difference.</p>
        
        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="auth-button">Sign Up</button>
        </form>

        <p className="auth-switch-link">
          Already have an account? <Link to={`/login?role=${role}`}>Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;