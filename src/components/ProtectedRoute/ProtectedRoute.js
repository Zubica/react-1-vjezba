import React from "react";
import PropTypes from "prop-types";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, redirectPath }) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  isLoggedIn: PropTypes.bool,
  redirectPath: PropTypes.string,
};

export default ProtectedRoute;
