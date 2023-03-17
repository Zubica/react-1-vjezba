import React from 'react';
import PropTypes from 'prop-types';
import "./Testimonial.scss";

const Testimonial = ({
imgSrc, imgAlt, 
content,
children,
isSecondary = false,
}) => {
  console.log(content);

  return (
<section className={`Section $ {isSecondary  ? "Section_secondary" : ""}`}>
        <div className ="Section-Inner">
          <div className="Testimonial">
            <figure className ="Testimonial-Figure">
              <img
                src={imgSrc}
                alt={imgAlt}
                className="Testimonial-Image"
              />
            </figure>
            <p className="Testimonial-Content">
              <span className="Testimonial-Quotation">"</span> At the academy, I
              learned how to apply technology in practice. Frontend education
              was demanding, it required a lot of time. Upon completion, I got
              my first job as a developer.<span className="Testimonial-Guotation"
                >"</span>
            </p>
          </div>
        </div>
      </section>
  );
};

Testimonial.propTypes = {
  imgAlt:PropTypes.string,
  imgSrc:PropTypes.string,
  content:PropTypes.string,
  isSecondary:PropTypes.bool,
  children:PropTypes.node
}

export default Testimonial
