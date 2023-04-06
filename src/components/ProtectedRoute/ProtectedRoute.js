import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, redirectPath = "/" }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectPath} />;
};

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default ProtectedRoute;