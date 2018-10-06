import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Andy Parry.</h1>
      <h3>
        I'm a UK based <span>technologist</span>,
        <span> cyclist</span> and <span>(occasional) photographer</span>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
