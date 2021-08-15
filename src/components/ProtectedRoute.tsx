import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./isAuthenticated";
interface ProtectedProps {
  component: any;
  path?:any;
  exact?:any
}
const ProtectedRoute: React.FC<ProtectedProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
