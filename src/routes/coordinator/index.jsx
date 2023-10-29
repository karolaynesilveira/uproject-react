import { Route } from "react-router-dom";
import ProjectScreen from "../../components/artifacts/projects";
import BaseCoordinatorRoute from "./base";
import CoordinatorHomeMessage from "./welcome";

export default [
  <Route
    key={"/coordinator"}
    exact
    path="/coordinator"
    element={<BaseCoordinatorRoute />}
  >
    <Route
      key={"/coordinator"}
      exact
      path="/coordinator"
      element={<CoordinatorHomeMessage />}
    />
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
      key={"coordinator/solicitations"}
      exact
      path={"/coordinator/solicitations"}
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
