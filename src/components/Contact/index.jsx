import React from "react";
import { Wrapper } from "./Contact.styles";
const Contact = () => (
  <Wrapper id="contact">
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

export default Contact;
