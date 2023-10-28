import Dashboard from "../../components/artifacts/dashboard";
import PrivateRoute from "../../components/functional/privateRoute";
import { Outlet, Route } from "react-router-dom";
import CoordinatorMenuItens from "../../components/users/coordinator/menuItens";
import ProjectScreen from "../../components/artifacts/projects";

export default [
  <Route
    key={"/coordinator"}
    exact
    path="/coordinator"
    element={
      <PrivateRoute>
        <Dashboard menuItens={<CoordinatorMenuItens />}>
          <Outlet></Outlet>
        </Dashboard>
      </PrivateRoute>
    }
  >
    ,
    <Route
      key={"coordinator/projects"}
      exact
      path={"/coordinator/projects"}
      element={<ProjectScreen />}
    />
    <Route
      key={"coordinator/projects/new"}
      exact
      path={"/coordinator/projects/new"}
      element={<div>Novo</div>}
    />
    ,
    <Route
      key={"coordinator/reports"}
      exact
      path={"/coordinator/reports"}
      element={<div>Relatórios</div>}
    />
    ,
    <Route
      key={"coordinator/resources"}
      exact
      path={"/coordinator/resources"}
      element={<div>Recursos</div>}
    />
    ,
    <Route
      key={"coordinator/users"}
      exact
      path={"/coordinator/users"}
      element={<div>Usuários</div>}
    />
    ,
  </Route>,
];
