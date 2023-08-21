import React from "react";
import { Routes as DOMRoutes, Route } from "react-router-dom";

import { LandingPage, Terms, Tracking, About, SignIn, Safety, Help, ForgotPassword } from "./pages";
import { Customer, FleetOwner, Rider } from "./pages/SignUp";
import HowDSpatchWorks from "./pages/HowDSpatchWorks/HowDSpatchWorks";

const Routes = ({ location }) => {
  return (
    <DOMRoutes location={location}>
      <Route exact path='/' element={<LandingPage />} />
      <Route exact path='terms-of-use/' element={<Terms />} />
      <Route exact path='track-your-order/' element={<Tracking />} />
      <Route exact path='about-us/' element={<About />} />
      <Route exact path='signin/' element={<SignIn />} />
      <Route exact path='signin/' element={<SignIn />} />
      <Route exact path='safety/' element={<Safety />} />
      <Route exact path='signin/forgotpassword/' element={<ForgotPassword />} />
      <Route exact path='customer/' element={<Customer />} />
      <Route exact path='fleet-owner/' element={<FleetOwner />} />
      <Route exact path='courier/' element={<Rider />} />
      <Route exact path='support/' element={<Help />} />

      <Route exact path='/how-dspatch-works' element={<HowDSpatchWorks />} />
    </DOMRoutes>
  );
};

export default Routes;
