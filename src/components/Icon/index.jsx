import React from "react";
import { Wrapper } from "./Icon.styles";
import PropTypes from "prop-types";
import feather from "feather-icons/dist/feather-sprite.svg";
const Icon = ({ href, label, name, style, onClick }) => {
  const target = href == "#" ? "_self" : "_blank";
  return (
    <Wrapper
      href={href}
      aria-label={label}
      target={target}
      rel="noreferrer"
      onClick={onClick}
    >
      <svg className="feather" style={style}>
        <use href={`${feather}#${name}`} />
      </svg>
    </Wrapper>
  );
};
Icon.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
export default Icon;
