import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import CoordinatorRoutes from "./coordinator";
import DirectorateRoutes from "./directorate";
import AdministrationRoutes from "./administration";
import GlobalRoutes from "./global";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {GlobalRoutes}
        {CoordinatorRoutes}
        {DirectorateRoutes}
        {AdministrationRoutes}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
