import React from "react";
import './Footer.css';


import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {
  return (

      <div className="footer-container">
        
        <h1>Let's Work Together!</h1>
        
        <div className="copyright">
          <p>&#169; 2025 by Ekansh Agrawal</p>
        </div>


        <div className="site-map">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-me">About</a></li>
            <li><a href="/work-experience">Work Experience</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/certifications">Certifications</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="socials">
          {/* <ul>
            <li><a href="https://www.linkedin.com/in/ekansh-agrawal-18743b264/">LinkedIn</a></li>
            <li><a href="https://github.com/exa2022">Github</a></li>
          </ul> */}
          <a href="https://www.linkedin.com/in/ekansh-agrawal-18743b264/">
              <i id="linkedin" className="fa fa-linkedin" aria-hidden="true"></i>
          </a>

          <a href="https://github.com/exa2022">
              <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>

      
      </div>
  );
};

export default Footer;
