import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import CoordinatorRoutes from './coordinator';
import DirectorateRoutes from './directorate';
import AdministrationRoutes from './administration';
import GlobalRoutes from './global';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      {CoordinatorRoutes}
      {DirectorateRoutes}
      {AdministrationRoutes}
      {GlobalRoutes}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
