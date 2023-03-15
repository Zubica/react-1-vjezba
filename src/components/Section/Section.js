import React from "react";
import PropTypes from "prop-types";
import "./Section.scss";

const Section = ({
  helperText,
  title,
  button,
  children,
  isSecondary = false,
}) => {
  console.log(helperText);

  return (
    <section className={`Section ${isSecondary ? "Section_secondary" : ""}`}>
      <div className="Section-Inner">
        {helperText && <p className="Section-HelperText">{helperText}</p>}
        {(title || button) && (
          <div className="Section-Header">
            {title && <h2 className="Section-Title">{title}</h2>}
            {button}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  helperText: PropTypes.string,
  title: PropTypes.string,
  button: PropTypes.node,
  isSecondary: PropTypes.bool,
  children: PropTypes.node,
};

export default Section;
