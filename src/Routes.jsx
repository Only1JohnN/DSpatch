import React from "react";
import { Routes as DOMRoutes, Route } from "react-router-dom";

import { LandingPage, Terms, Tracking, About, SignIn } from "./pages";
import { Customer, FleetOwner, Rider } from "./pages/SignUp";

const Routes = ({ location }) => {
  return (
    <DOMRoutes location={location}>
      <Route exact path='/' element={<LandingPage />} />
      <Route exact path='terms-of-use/' element={<Terms />} />
      <Route exact path='tracking/' element={<Tracking />} />
      <Route exact path='about-us/' element={<About />} />
      <Route exact path='sign-in/' element={<SignIn />} />
      {/* <Route exact path='safety/' element={<Safety />} /> */}
      {/* <Route exact path='support/' element={<Support />} /> */}
      <Route exact path='customer/' element={<Customer />} />
      <Route exact path='fleet-owner/' element={<FleetOwner />} />
      <Route exact path='courier/' element={<Rider />} />
    </DOMRoutes>
  );
};

export default Routes;
