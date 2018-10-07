import React from "react";
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons//fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
