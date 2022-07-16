import React from "react";
import { Wrapper } from "./Hero.styles";

const Hero = () => (
  <Wrapper>
    <label className="head"> Hi, my name is</label>
    <h1 className="title">
      <span className="myName">Andrian Davinta.</span>
      <br />
      I'm a Software Developer.
    </h1>
    <p className="description">
      <span>
        I build things for the web specializing in Mern Stack. Currently, I'm
        focused on customizing ERP Software at {""}
      </span>
      <a
        href="https://itgroupinc.asia/"
        target="_blank"
        className="animatedLink"
      >
        IT Group.
      </a>
    </p>
  </Wrapper>
);

export default Hero;
