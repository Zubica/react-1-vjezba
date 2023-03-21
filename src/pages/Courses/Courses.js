import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { courses } from "../../utils/data";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header isSecondary />
      <main>
        <Section
          title="All courses"
          actionContainer={
            <Button isOutLine handleClick={() => navigate(-1)}>
              Back
            </Button>
          }
        >
          <Grid>
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                subtitle={course.subtitle}
                imgSrc={course.img.src}
                imgAlt={course.img.alt}
                url={course.id}
              />
            ))}
          </Grid>
        </Section>
      </main>
    </>
  );
};

export default Courses;
