import { useState } from "react";
import Dashboard from "../../components/artifacts/dashboard";
import PrivateRoute from "../../components/functional/privateRoute";
import { Outlet } from "react-router-dom";
import AdministratorMenuItens from "../../components/users/administrator/menuItens";

const BaseAdministratorRoute = () => {
  const [options, showOptions] = useState(false);
  return (
    <PrivateRoute>
      <Dashboard
        options={options}
        showOptions={showOptions}
        menuItens={<AdministratorMenuItens options={options} showOptions={showOptions} />}
      >
        <Outlet></Outlet>
      </Dashboard>
    </PrivateRoute>
  );
};

export default BaseAdministratorRoute;
