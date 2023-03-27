import React from "react";
import "./Landing.scss";
import { Button } from "../../utils/styles/generalStyles";
import LandingImg from "../../assets/images/landing.jpg";

const Landing = () => {
  return (
    <section className="Landing">
      <figure className="Landing-Figure">
        <img src={LandingImg} alt="Landing" className="Landing-Image" />
      </figure>
      <div className="Landing-Overlay Landing-Overlay_left"></div>
      <div className="Landing-Overlay Landing-Overlay_right"></div>
      <div className="Landing-Content">
        <div className="Landing-ContentInner">
          <h1 className="Landing-Title">
            Learn what matters, Algebra Academy powered by Vaucher
          </h1>
          <p className="Landing-Subtitle">
            Make a turnaround in your career or upgrade your current skill set
            with knowledge-based lessons from IT practice.
          </p>
          <Button isLanding>Explore courses</Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
