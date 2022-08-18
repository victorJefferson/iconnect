import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component }) => {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  if (!authenticated && !loading) {
    return <Redirect to="login" />;
  }
  return <Route exact path={path} component={component} />;
};

export default PrivateRoute;
