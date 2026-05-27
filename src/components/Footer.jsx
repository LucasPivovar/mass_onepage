import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-sec">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="/" className="logo-text">
              <span className="logo-icon"></span>
              Sasico
            </a>
            <p>AI transforms the way you build. Craft beautiful, responsive, and high-performing websites faster than ever.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h5>Product</h5>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#templates">Templates</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Support</h5>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sasico. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
