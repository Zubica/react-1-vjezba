import "./App.scss";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
