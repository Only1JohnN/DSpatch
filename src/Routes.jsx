import React from "react";
import { Routes as DOMRoutes, Route } from "react-router-dom";

import { LandingPage, Terms } from "./pages";

const Routes = ({ location }) => {
  return (
    <DOMRoutes location={location}>
      <Route exact path='/' element={<LandingPage />} />

      <Route exact path='/terms' element={<Terms />} />
    </DOMRoutes>
  );
};

export default Routes;
