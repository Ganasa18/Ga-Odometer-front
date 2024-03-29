import React, { useEffect } from "react";
// import "./App.less";
import { Home, LoginPage } from "./pages";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { Provider } from "react-redux";
import store from "./redux/";
import { Loading, Sidebar } from "./components";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";
const cookies = new Cookies();

const authToken = cookies.get("token");

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Router />
      </BrowserRouter> */}
      <Provider store={store}>
        {!authToken ? <LoginPage /> : <Sidebar />}
        {/* {isLoadingPage && <Loading />} */}
      </Provider>
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
