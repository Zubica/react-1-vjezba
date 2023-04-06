import "./App.scss";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import { useLayoutEffect, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useLayoutEffect(() => {
    const isAccessTokenSaved = localStorage.getItem("accessToken") !== null;
    setIsLoggedIn(isAccessTokenSaved);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<Course />} />
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} redirectPath="/sign-in" />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route element={<ProtectedRoute isLoggedIn={!isLoggedIn} />}>
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
