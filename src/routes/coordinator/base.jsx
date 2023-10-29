import { useState } from "react";
import Dashboard from "../../components/artifacts/dashboard";
import PrivateRoute from "../../components/functional/privateRoute";
import CoordinatorMenuItens from "../../components/users/coordinator/menuItens";
import { Outlet } from "react-router-dom";

const BaseCoordinatorRoute = () => {
  const [options, showOptions] = useState(false);
  return (
    <PrivateRoute>
      <Dashboard
        options={options}
        showOptions={showOptions}
        menuItens={<CoordinatorMenuItens options={options} showOptions={showOptions} />}
      >
        <Outlet></Outlet>
      </Dashboard>
    </PrivateRoute>
  );
};

export default BaseCoordinatorRoute;
