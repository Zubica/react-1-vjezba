import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({
  isLanding = false,
  isSecondary = false,
  isOutLine = false,
  className,
  handleClick,
  children,
}) => {
  let modifierClass = "";

  switch (true) {
    case isLanding:
      modifierClass = "Button_landing";
      break;
    case isSecondary:
      modifierClass = "Button_secondary";
      break;
    case isOutLine:
      modifierClass = "Button_outline";
      break;
    default:
      modifierClass = "";
      break;
  }
  return (
    <button
      className={`Button ${modifierClass} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  isLanding: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isOutLine: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
