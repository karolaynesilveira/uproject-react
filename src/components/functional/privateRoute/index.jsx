import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isValid = false;
  return isValid ? <Outlet /> : <Navigate to="/entrar" />;
};

export default PrivateRoute;
