import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Navbar.styles";
import Logo from "../../assets/images/andrian1.jpg";
import Icon from "../Icon";

const Navbar = () => {
  const onClick = (e) => {
    e.preventDefault();
    const hiddenEl = window.document.getElementById("hidden");
    const opacity = hiddenEl.style.opacity;
    if (opacity == 0) {
      hiddenEl.style.opacity = 1;
      hiddenEl.style.visibility = "visible";
      hiddenEl.style.zIndex = 11;
      window.document.body.style.overflowY = "hidden";
    } else {
      hiddenEl.style.opacity = 0;
      hiddenEl.style.visibility = "hidden";
      hiddenEl.style.zIndex = 9;
      window.document.body.style.overflowY = "visible";
    }
  };
  return (
    <Wrapper>
      <Link to="" className="logo">
        <img src={Logo} style={{ width: "50px", height: "40px" }}></img>
      </Link>
      <div className="links">
        <a href="#about" className="link">
          About
        </a>
        <a href="#experience" className="link">
          Experience
        </a>
        <a href="#work" className="link">
          Work
        </a>
        <a href="#contact" className="link">
          Contact
        </a>
        <a href="/cv.pdf" download target="_blank" className="button">
          Resume
        </a>
      </div>
      <div className="hamBox">
        <Icon
          href=""
          label="menu"
          name="menu"
          style={{ width: "36px", height: "36px" }}
          onClick={onClick}
        ></Icon>
      </div>
    </Wrapper>
  );
};
export default Navbar;
