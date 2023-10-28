import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const isValid = true;
  return isValid ? props.children : <Navigate to="/entrar" />;
};

export default PrivateRoute;
