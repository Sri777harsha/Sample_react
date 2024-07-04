import React, { useState } from 'react';
import '../styles/loginsignup.css'; // Import your CSS file

function LoginSignup() {
  const [currentPage, setCurrentPage] = useState('login'); // State for active page

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const login = (e) => {
    e.preventDefault();
    alert(`Successfully logged in with email: ${mail}`); // More informative alert
  };

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For future signup functionality

  return (
    <div className="login-signup">
      <div className={`container ${currentPage}`}>
        <div className="header">
          {currentPage === 'login' && (
            <h1>Welcome Back</h1>
          )}
          {currentPage === 'signup' && (
            <h1>Create Your Account</h1>
          )}
        </div>
        {currentPage === 'login' && (
          <div className="login-form">
            <form action="" onSubmit={login}>
              <input
                type="text"
                placeholder="Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Sign in</button>
            </form>
            <div className="signup-link">
              Don't have an account?{' '}
              <span onClick={() => handlePageChange('signup')}>Sign up</span>
            </div>
          </div>
        )}
        {currentPage === 'signup' && (
          <div className="signup-form">
            <form>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Add additional signup fields as needed */}
              <button type="submit" disabled>Sign up (Functionality not implemented)</button>
            </form>
            <div className="login-link">
              Already have an account?{' '}
              <span onClick={() => handlePageChange('login')}>Log in</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
