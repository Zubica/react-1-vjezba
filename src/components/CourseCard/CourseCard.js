import React from "react";
import PropTypes from "prop-types";
import "./CourseCard.scss";

import Lecture1Img from "../../assets/images/lecture-1.jpg";

const CourseCard = ({ imgSrc, imgAlt, subtitle }) => {
  return (
    <article className="CourseCard">
      <a href="#">
        <figure className="CourseCard-Figure">
          <img src={imgSrc} alt={imgAlt} className="CourseCard-Image" />
        </figure>
        <h3 className="CourseCard-Title">1. Introduction</h3>
        <p className="CourseCard-Subtitle">60 minutes</p>
      </a>
    </article>
  );
};

CourseCard.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  subtitle: PropTypes.string,
};

export default CourseCard;
