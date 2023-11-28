import { Route } from "react-router-dom";
import ProjectScreen from "../../components/artifacts/projects";
import RequestScreen from "../../components/artifacts/requests";
import BaseAdministratorRoute from "./base";
import FormProjects from "../../components/artifacts/projects/createProject";
import AdministratorHome from "../../components/artifacts/dashboard/administrator";
import FormSolicitations from "../../components/artifacts/requests/createRequest";

export default [
  <Route
    key={"/directorate"}
    exact
    path="/directorate"
    element={<BaseAdministratorRoute />}
  >
    <Route
      key={"/directorate"}
      exact
      path="/directorate"
      element={<AdministratorHome />}
    />
    ,
    <Route
      key={"directorate/projects"}
      exact
      path={"/directorate/projects"}
      element={<ProjectScreen />}
    />
    <Route
      key={"directorate/projects/new"}
      exact
      path={"/directorate/projects/new"}
      element={<FormProjects/>}
    />
    ,
    <Route
      key={"directorate/solicitations/new"}
      exact
      path={"/directorate/solicitations/new"}
      element={<FormSolicitations/>}
    />
    ,
    <Route
      key={"directorate/reports"}
      exact
      path={"/directorate/reports"}
      element={<div>Relatórios</div>}
    />
    ,
    <Route
      key={"directorate/solicitations"}
      exact
      path={"/directorate/solicitations"}
      element={<RequestScreen/>}
    />
    ,
    <Route
      key={"directorate/users"}
      exact
      path={"/directorate/users"}
      element={<div>Usuários</div>}
    />
    ,
  </Route>,
];
