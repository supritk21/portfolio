import React from 'react';
import './about.css';
import '../footer/Footer.css'

function Contact() {
  const email = 'schafle320@gmail.com';
  const subject = 'Hello from your portfolio website!';
  const body = '';

  const mailTo = `mailto:${email}?subject=${subject}&body=${body}`;
  return (
    <div className="about">
      <h1>Contact Info</h1>
      <p>connect me on</p>
      <ul className="footer-links">
        <li><a href="https://github.com/supritk21" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/suprit-chafle-b093011b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
      <div>
        <a href={mailTo} target="_blank" rel="noopener noreferrer">
          <button>Contact Me</button>
        </a>
       </div>

          </div>
          );
}

          export default Contact;

