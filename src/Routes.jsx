import React from "react";
import { Routes as DOMRoutes, Route } from "react-router-dom";

import { LandingPage, Terms, AboutUs } from "./pages";

const Routes = ({ location }) => {
  return (
    <DOMRoutes location={location}>
      <Route exact path='/' element={<LandingPage />} />

      <Route exact path='/terms' element={<Terms />} />

      <Route exact path='/about-us' element={<AboutUs />} />
    </DOMRoutes>
  );
};

export default Routes;
