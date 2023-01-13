import React from "react";
import { Routes as DOMRoutes, Route } from "react-router-dom";

import { LandingPage, Terms, Tracking } from "./pages";

const Routes = ({ location }) => {
  return (
    <DOMRoutes location={location}>
      <Route exact path='/' element={<LandingPage />} />

      <Route exact path='/terms' element={<Terms />} />
      <Route exact path='/tracking' element={<Tracking />} />
    </DOMRoutes>
  );
};

export default Routes;
