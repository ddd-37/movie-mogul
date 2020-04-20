import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../../Header/Header";

const PrivateRoute = (props) => {
  console.log("PrivateRoute -> PrivateRoute", { ...props });
  return props.isAuthenticated ? (
    <>
      <Header />
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
