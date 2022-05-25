import React, { useEffect } from "react";
// import "./App.less";
import { Home, LoginPage } from "./pages";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { Sidebar } from "./components";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const authToken = cookies.get("token");

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Router />
      </BrowserRouter> */}
      {!authToken ? <LoginPage /> : <Sidebar />}
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
