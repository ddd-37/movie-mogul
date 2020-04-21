import React from "react";
import { connect } from "react-redux";
import { startLogin, startLogout } from "../../../redux/actions/auth";

import { Button } from "semantic-ui-react";

const LoginOutBtn = ({ startLogin, startLogout, isLoggedIn, isFloated }) => {
  const btnText = isLoggedIn ? "Logout" : "LogIn with your Google Account";
  const btnColor = isLoggedIn ? "orange" : "blue";
  const action = isLoggedIn ? startLogout : startLogin;

  return (
    <Button onClick={action} inverted color={btnColor} floated={isFloated}>
      {btnText}
    </Button>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { isLoggedIn: state.auth.uid };
};

const mapDispatchToProps = {
  startLogin,
  startLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginOutBtn);
