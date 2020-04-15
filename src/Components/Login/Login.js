import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../redux/actions/auth";

const Login = ({ startLogin }) => {
  return (
    <div>
      <button onClick={startLogin}>LogIn</button>
    </div>
  );
};

const mapDispatchToProps = {
  startLogin,
};

export default connect(undefined, mapDispatchToProps)(Login);
