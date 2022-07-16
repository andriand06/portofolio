import React from "react";
import { Wrapper } from "./Sidebar.styles";
import Icon from "../Icon";
const Sidebar = () => (
  <Wrapper>
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
        <Icon href="mailto:andriandavinta@gmail.com" label="Mail" name="mail" />
      </li>
    </ul>
  </Wrapper>
);

export default Sidebar;
