import React from "react";
import PropTypes from "prop-types";
import "./Testimonial.scss";

const Testimonial = ({ imgSrc, imgAlt, children }) => {
  //   imgSrc,
  //   imgAlt,
  //   content,
  //   isSecondary = false,
  //   children,
  // }) => {
  //   console.log(content);

  return (
    // <section className={`Section ${isSecondary ? "Section_secondary" : ""}`}>
    //   <div className="Section-Inner">
    <div className="Testimonial">
      <figure className="Testimonial-Figure">
        <img src={imgSrc} alt={imgAlt} className="Testimonial-Image" />
      </figure>
      <p className="Testimonial-Content">
        <span className="Testimonial-Quotation">"</span>
        {children}
        <span className="Testimonial-Q uotation">"</span>
      </p>
    </div>
  );
};

Testimonial.propTypes = {
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
  // isSecondary: PropTypes.bool,
  children: PropTypes.node,
};

export default Testimonial;
