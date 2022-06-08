import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { LoginPage, Home, Report, Area, Departement } from "../pages";

const Router = () => {
  return (
    <Switch>
      {/* <Route index element={<LoginPage />} /> */}
      <Route index path="/" element={<Home />} />
      <Route path="/report" element={<Report />} />
      <Route path="/area" element={<Area />} />
      <Route path="/departement" element={<Departement />} />
    </Switch>
  );
};

export default Router;
