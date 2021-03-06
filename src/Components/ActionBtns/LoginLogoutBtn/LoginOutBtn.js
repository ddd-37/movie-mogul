import React from "react";
import { connect } from "react-redux";
import { startLogin, startLogout } from "../../../redux/actions/auth";

import { Button } from "semantic-ui-react";

// ToDo - the LogIn feature of this now seems obsolete since we're using FirebaseUI
const LoginOutBtn = ({ startLogin, startLogout, isLoggedIn, isFloated }) => {
  const btnText = isLoggedIn ? "Logout" : "LogIn with your Google Account";
  const btnColor = isLoggedIn ? "orange" : "blue";
  const action = isLoggedIn ? startLogout : startLogin;

  return (
    <Button
      fluid
      onClick={action}
      inverted
      color={btnColor}
      floated={isFloated}
    >
      {btnText}
    </Button>
  );
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.uid };
};

const mapDispatchToProps = {
  startLogin,
  startLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginOutBtn);
