import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import NavHeader from "../../NavHeader/NavHeader";

const PrivateRoute = (props) => {
  console.log("PrivateRoute -> PrivateRoute", { ...props });
  return props.isAuthenticated ? (
    <>
      <NavHeader />
      <Route {...props} />
    </>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = (state) => {
  return { isAuthenticated: !!state.auth.uid };
};

export default connect(mapStateToProps)(PrivateRoute);
