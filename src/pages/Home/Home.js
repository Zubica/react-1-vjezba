import React from "react";
import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Button from "../../components/Button/Button";
import CourseCard from "../../components/CourseCard/CourseCard";
import { courses } from "../../utils/data";
import Grid from "../../components/Grid/Grid";
import Testimonial from "../../components/Testimonial/Testimonial";
import TestimonialImg from "../../assets/images/testimonial.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main>
        <Landing />
        <Section
          title={"Open your new possibilities"}
          actionContainer={
            <Button isOutLine handleClick={() => navigate("/courses")}>
              More courses
            </Button>
          }
          helperText="Learn something new"
        >
          <Grid>
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                imgSrc={course.img.src}
                imgAlt={course.img.alt}
                title={course.title}
                subtitle={course.subtitle}
                url={course.id}
              />
            ))}
          </Grid>
        </Section>

        <Section isSecondary={true}>
          <Testimonial imgSrc={TestimonialImg} imgAlt="Testimonial žena">
            At the academy, I learned how to apply technology in practice.
            Frontend education was demanding, it required a lot of time. Upon
            completion, I got my first job as a developer.
          </Testimonial>
        </Section>
      </main>
    </>
  );
};

export default Home;
