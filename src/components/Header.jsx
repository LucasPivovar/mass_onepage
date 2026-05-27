import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-main">
      <div className="container">
        <div className="header-inner">
          
          <div className="header-logo">
            <a href="/" className="logo-text">
              <span className="logo-icon"></span>
              Sasico
            </a>
          </div>

          <nav className="main-menu" aria-label="Main Navigation">
            <ul>
              <li className="active"><a href="#home">Home</a></li>
              <li><a href="#features">Feature</a></li>
              <li><a href="#templates">Template</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </nav>

          <div className="header-btn">
            <a href="#" className="login-btn">Log In</a>
            <a href="#" className="btn btn-secondary sign-btn">Sign Up</a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
