import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({
  isLanding = false,
  isSecondary = false,
  isOutLine = false,
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
  return <button className={`Button ${modifierClass} ${className}`>
  {children}
  </button>;
};

Button.propTypes = {
  isLanding: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isOutLine: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
