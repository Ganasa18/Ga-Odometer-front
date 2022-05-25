import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { LoginPage, Home, Report } from "../pages";

const Router = () => {
  return (
    <Switch>
      {/* <Route index element={<LoginPage />} /> */}
      <Route index path="/" element={<Home />} />
      <Route path="/report" element={<Report />} />
    </Switch>
  );
};

export default Router;
