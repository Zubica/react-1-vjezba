import React from "react";
import { Button } from "../../utils/styles/generalStyles";
import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import CourseImg from "../../assets/images/lecture-3.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../../utils/data";


const Course = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const course = courses.find((course) => course.id === Number(id));

  return (
    <>
      <Header isSecondary />
      <main>
        <Section
          title={course.title}
          actionContainer={
            <Button isOutLine handleClick={() => navigate(-1)}>
              Back
            </Button>
          }
          helperText={course.subtitle}
        >
          <SingleCourse imgSrc={course.img.src} imgAlt={course.img.alt}>
            {course.content}
          </SingleCourse>
        </Section>
      </main>
    </>
  );
};

export default Course;
