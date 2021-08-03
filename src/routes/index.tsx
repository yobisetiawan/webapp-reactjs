import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import Page404 from "../pages/Errors/Page404";

import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  const PublicPages = [
    {
      path: "/login",
      component: <Login />,
    },
    {
      path: "/forgot-password",
      component: <ForgotPassword />,
    },
  ];

  const PrivatePages = [
    {
      path: "/dashboard",
      component: <Dashboard />,
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact>
          <Dashboard />
        </PrivateRoute>

        {PublicPages.map((i, idx) => (
          <Route path={i.path} key={idx}>
            {i.component}
          </Route>
        ))}

        {PrivatePages.map((i, idx2) => (
          <PrivateRoute path={i.path} key={idx2}>
            {i.component}
          </PrivateRoute>
        ))}
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
