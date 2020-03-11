import React from "react";
import Twitter from "../img/social/twitter.svg"
import Facebook from "../img/social/facebook.svg"
import LinkedIn from "../img/social/linkedin.svg"
import Instagram from "../img/social/instagram.svg"
import GitHub from "../img/social/github.svg"


const SocialLinks = () => (
  <div className="social"> 
    <a
    className="navbar-item"
    href="https://www.facebook.com/mr.andy.parry"
    target="_blank"
    rel="noopener noreferrer"
    >
      <span className="icon">
      <img src={Facebook} alt="Facebook" />
      </span>
    </a>
    <a
    className="navbar-item"
    href="https://twitter.com/andyparry"
    target="_blank"
    rel="noopener noreferrer"
    >
      <span className="icon">
        <img src={Twitter} alt="Twitter" />
      </span>
    </a>
    <a
    className="navbar-item"
    href="https://www.linkedin.com/in/andyparry/"
    target="_blank"
    rel="noopener noreferrer"
    >
      <span className="icon">
        <img src={LinkedIn} alt="LinkedIn" />
      </span>
    </a>
    <a
    className="navbar-item"
    href="https://www.instagram.com/andyparry/"
    target="_blank"
    rel="noopener noreferrer"
    >
      <span className="icon">
      <img src={Instagram} alt="Instagram" />
      </span>
    </a>
   <a
   className="navbar-item"
   href="https://github.com/MontyGoose"
   target="_blank"
   rel="noopener noreferrer"
   >
     <span className="icon">
     <img src={GitHub} alt="GitHub" />
     </span>
   </a>
  </div>
);

export default SocialLinks;
