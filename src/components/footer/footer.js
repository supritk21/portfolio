import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
        Turning Data into Insights, One Model at a Time
        </div>
        <ul className="footer-links">
          <li><a href="https://github.com/supritk21" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/suprit-chafle-b093011b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:your-email@example.com">Email</a></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Suprit Chafle. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
