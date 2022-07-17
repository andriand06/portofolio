import React, { useRef } from "react";
import { Wrapper } from "./Contact.styles";
import gsap from "gsap";
const Contact = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  tl.current = gsap.timeline({ paused: true });
  tl.current.fromTo(
    q(["#contact > .title", "#contact > p", "#contact > .button"]),
    { opacity: 0, y: 100 },
    { duration: 1, opacity: 1, y: 0, stagger: 0.2, ease: "bounce" }
  );
  const scrollAnimation = () => {
    console.log(window.scrollY);
    if (window.scrollY > 1400) {
      tl.current.play();
      document.removeEventListener("scroll", scrollAnimation);
    }
  };
  document.addEventListener("scroll", scrollAnimation);
  return (
    <Wrapper id="contact" ref={el}>
      <p className="greenText" style={{ fontSize: "14px" }}>
        04. What's next?
      </p>
      <h2 className="title">Get In Touch</h2>
      <p>
        Get to know each other, freely contact me or connect with me through
        LinkedIn
      </p>
      <a
        href="mailto:andriandavinta@gmail.com"
        className="button"
        style={{ marginTop: "2rem" }}
      >
        Say Hello
      </a>
    </Wrapper>
  );
};
export default Contact;
