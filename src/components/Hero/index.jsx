import React, { useRef, useLayoutEffect } from "react";
import { Wrapper } from "./Hero.styles";
import gsap from "gsap";
const Hero = () => {
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
};

export default Hero;
