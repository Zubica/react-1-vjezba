import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { courses } from "../../utils/data";

const Courses = () => {
  return (
    <>
      <Header isSecondary />
      <main>
        <Section title="All courses">
          <Grid>
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                subtitle={course.subtitle}
                imgSrc={course.img.src}
                imgAlt={course.img.alt}
              />
            ))}
          </Grid>
        </Section>
      </main>
    </>
  );
};

export default Courses;
