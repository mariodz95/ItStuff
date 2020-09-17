import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authHeader } from "./authHeader";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authHeader() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
