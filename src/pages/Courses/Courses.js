import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import CourseCard from "../../components/CourseCard/CourseCard";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { courses as data } from "../../utils/data";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { SearchBar } from "../../utils/styles/generalStyles";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(data);
    }, 3000);
  }, []);

  const handleSearch = (e) => {
    const courseTitle = e.target.value.toLowerCase();

    const filteredCourses = data.filter((course) =>
      course.title.toLowerCase().includes(courseTitle)
    );

    setCourses(filteredCourses);
  };

  // useEffect (() => {
  //   if (courses) {
  //     setTimeout (() => {
  //       setCourses(null);
  //     },2000);
  //   } else {
  //     setCourses(data);
  //   },2000);
  // }
  // })

  return (
    <>
      <Header isSecondary />
      <main>
        <Section
          title="All courses"
          actionContainer={
            <SearchBar placeholder={"Search courses"} onChange={handleSearch} />
          }
        >
          {courses ? (
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
          ) : (
            <Loader />
          )}
        </Section>
      </main>
    </>
  );
};

export default Courses;
