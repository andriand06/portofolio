import React, { useRef, useLayoutEffect } from "react";
import { Wrapper } from "./Hero.styles";
import gsap from "gsap";
const Hero = ({ jobTitle, description, companyName, companyLink }) => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  useLayoutEffect(() => {
    gsap.fromTo(
      q([".head", ".heroTitle", ".description"]),
      { opacity: 0, y: 100 },
      { duration: 1, opacity: 1, y: 0, stagger: 0.2, ease: "bounce" }
    );
  }, []);
  return (
    <Wrapper ref={el}>
      <label className="head"> Hi, my name is</label>
      <h1 className="heroTitle">
        <span className="myName">Andrian Davinta.</span>
        <br />
        {` I'm a ${jobTitle}.`}
      </h1>
      <p className="description">
        <span>{description} at </span>
        <a href={companyLink} target="_blank" className="animatedLink">
          {companyName}
        </a>
      </p>
    </Wrapper>
  );
};

export default Hero;
