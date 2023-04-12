import React from "react";
import "./Landing.scss";
import { Button } from "../../utils/styles/generalStyles";
import LandingImg from "../../assets/images/landing.jpg";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 3edd9e4ea54f36219e14ca15d15fb9b18c03dd65

const Landing = () => {
  const navigate = useNavigate();
  
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
<<<<<<< HEAD
          <Button isLanding onClick={() => navigate("/courses")}>Explore courses</Button>
=======
          <Link to="/courses">
            <Button isLanding>Explore courses</Button>
          </Link>
>>>>>>> 3edd9e4ea54f36219e14ca15d15fb9b18c03dd65
        </div>
      </div>
    </section>
  );
};

export default Landing;
