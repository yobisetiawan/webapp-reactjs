import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { AppLayout, GetCurrentUser } from "../components";
import { RootState } from "../redux/store";
import { getDefValue } from "../utils/helper";

interface Props {
  children: React.ReactNode;
  path?: string;
  exact?: boolean;
}

const PrivateRoute = ({ children, ...rest }: Props) => {
  const auth = useSelector((state: RootState) => state.auth);
  const isLogin = auth.token && auth.user;
  if (auth.token !== "" && getDefValue(auth.user, "email") === "") {
    return <GetCurrentUser />;
  }
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
