import React from 'react';
import PropTypes from 'prop-types';
import "./Testimonial.scss";

const Testimonial = ({
figure,
img,
content,
children,
isSecondary = false,
}) => {
  console.log(content);

  return (
    <section className={`Section &{isSecondary ? "Section_secondary" : ""} `}>
        <div className="Section-Inner">
          <div className="Testimonial">
            <figure className="Testimonial-Figure">
              <img
                src="./images/testimonial.jpg"
                alt="Testimonial"
                className="Testimonial-Image"
              />
            </figure>
            <p className="Testimonial-Content">
              <span className="Testimonial-Quotation">"</span> At the academy, I
              learned how to apply technology in practice. Frontend education
              was demanding, it required a lot of time. Upon completion, I got
              my first job as a developer.<span className="Testimonial-Quotation"
                >"</span
              >
            </p>
          </div>
        </div>
      </section>
    <div>Testimonial</div>
  )
}

Testimonial.propTypes = {}

export default Testimonial
