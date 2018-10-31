import React from "react";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (<section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src={profilePic} alt=""/>
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p>
        I’m a technology leader who constantly strives to learn, flex, grow and is continually looking to understand more of this amazing world and people. I’m super excited about growing diversity in technology, and specifically in being a male ally for gender diversity.
      </p>
      <p>
        I am passionate about technology and have been actively building software for most of my life – I cut my first code at the age of 8. I’ve typically worked in and around software houses and large corporations – but I still do publish opensource code under the name montygoose and SquareEleven.
      </p>
      <p>
        Right now, I lead Technical Delivery for a Financial Investment Company (Newton) – which encompasses looking at culture change, embracing and utilising new technology advances and encouraging agility and value through out the technology delivery pipeline.
      </p>
      <p>
        Alongside tech, I’m a father and husband, an uber keen cyclist, poor but trying photographer and occasion traveller
      </p>
    </div>
  </div>
</section>);

export default About;
