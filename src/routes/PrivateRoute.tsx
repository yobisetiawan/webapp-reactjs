import React from "react";
import { Redirect, Route } from "react-router-dom";

import { AppLayout } from "../components";

interface Props {
  children: React.ReactNode;
  path?: string;
  exact?: boolean;
}

const PrivateRoute = ({ children, ...rest }: Props) => {
  const isLogin = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          <AppLayout>{children}</AppLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
