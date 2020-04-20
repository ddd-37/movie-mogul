import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = (props, { isAuthenticated }) =>
  !isAuthenticated ? (
    <>
      <Route {...props} />
    </>
  ) : (
    <Redirect to="/" />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
