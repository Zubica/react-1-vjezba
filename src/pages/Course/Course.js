import React from "react";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import CourseImg from "../../assets/images/lecture-3.jpg";

const Course = () => {
  return (
    <>
      <Header isSecondary />
      <main>
        <Section
          title="3. Version Control Systems"
          button={<Button isOutLine>Back</Button>}
          helperText="120+ Minutes"
        >
          <SingleCourse imgSrc={CourseImg} imgAlt="Course name">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            nulla necessitatibus a excepturi eum ipsum ea, ratione adipisci
            reprehenderit unde debitis nesciunt dolores et doloribus! Quaerat
            officiis enim ex reiciendis.
          </SingleCourse>
        </Section>
      </main>
    </>
  );
};

export default Course;
