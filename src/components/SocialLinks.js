import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/mr.andy.parry">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/andyparry">
        <FaTwitter />
      </a>
    </li>
    {/* <li>
      <a href="#">
        <FaGooglePlus />
      </a>
    </li> */}
    <li>
      <a href="https://www.instagram.com/andyparry/">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/MontyGoose">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
