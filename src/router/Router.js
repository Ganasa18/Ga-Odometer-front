import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { LoginPage } from "../pages";

const Router = () => {
  return <Switch path="/" component={LoginPage}></Switch>;
};

export default Router;
