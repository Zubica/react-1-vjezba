import React from "react";
import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Button from "../../components/Button/Button";
import CourseCard from "../../components/CourseCard/CourseCard";
import { courses } from "../../utils/data";
import Grid from "../../components/Grid/Grid";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Section
          title={"Open your new possibilities"}
          button={<Button>More courses</Button>}
          helperText={"Learn something new"}
        >
          <Grid>
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                imgSrc={course.img.src}
                imgAlt={course.img.alt}
                title={course.title}
                subtitle={course.subtitle}
              />
            ))}
          </Grid>
        </Section>
        <Section
        isSecondary = {true}>At the academy, I
        learned how to apply technology in practice. Frontend education
        was demanding, it required a lot of time. Upon completion, I got
        my first job as a developer.</Section>
        </main> 
    </>
  );
};

export default Home;
