import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple mock validation
    if (email === 'user@example.com' && password === '123456') {
      onLogin();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form className="login-form p-4" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Sign In</h2>
        {error && <p className="text-danger">{error}</p>}
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit" className="btn btn-danger w-100">Sign In</button>
        <p className="text-center mt-3 text-muted">
          New to Netflix? <a href="#">Sign up now.</a>
        </p>
      </form>
    </div>
  );
}
