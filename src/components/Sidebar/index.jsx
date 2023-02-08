import React, { useRef, useLayoutEffect } from "react";
import { Wrapper } from "./Sidebar.styles";
import Icon from "../Icon";
import gsap from "gsap";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  useLayoutEffect(() => {
    gsap.fromTo(
      q(".lists"),
      { opacity: 0, x: -100 },
      { duration: 1, stagger: 0.2, opacity: 1, x: 0 }
    );
  }, []);
  return (
    <Wrapper ref={el}>
      <ul className="lists">
        <li>
          <Icon
            href="https://github.com/andriand06"
            label="GitHub"
            name="github"
          />
        </li>
        <li>
          <Icon
            href="https://twitter.com/davintaandrian"
            label="Twitter"
            name="twitter"
          />
        </li>
        <li>
          <Icon
            href="https://www.instagram.com/andriandavinta_"
            label="Instagram"
            name="instagram"
          />
        </li>
        <li>
          <Icon
            href="https://www.linkedin.com/in/andriandavinta/"
            label="LinkedIn"
            name="linkedin"
          />
        </li>
        <li>
          <Icon
            href="mailto:andriandavinta@gmail.com"
            label="Mail"
            name="mail"
          />
        </li>
        <li>
          <Icon
            href="https://www.upwork.com/freelancers/~01852a78b1232dd2b1?viewMode=1"
            label="Upwork"
            name="arrow-up-circle"
          />
        </li>
      </ul>
    </Wrapper>
  );
};

export default Sidebar;
