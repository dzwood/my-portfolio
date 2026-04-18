import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">Daniel Wood</h3>
            <p className="footer-title">Senior Full-Stack Engineer</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/dzwood" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/daniel-wood-973322198" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:dzwood327@gmail.com">Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Daniel Wood. All rights reserved.</p>
          <p className="footer-build">Built with React & Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
