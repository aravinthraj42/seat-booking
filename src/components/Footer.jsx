import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
           Aravinth Raj J. - Front End Engineer 
        </p>
        <div className="footer-links">
        © {new Date().getFullYear()} {'|'} All rights reserved. {'|'}
          <a
            href="https://aravinthraj42.github.io/aravinth-profile-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Portfolio
          </a>
          {'|'}
          <a
            href="https://www.linkedin.com/in/aravinth-raj-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          {'|'}
          <a
            href="mailto:aravinthraj42@gmal.com"
            className="footer-link"
          >
            Email Me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
