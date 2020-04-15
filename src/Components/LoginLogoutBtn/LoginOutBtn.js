import React from "react";
import { connect } from "react-redux";
import { startLogin, startLogout } from "../../redux/actions/auth";

const LoginOutBtn = ({ startLogin, startLogout, isLoggedIn }) =>
  isLoggedIn ? (
    <div>
      <button onClick={startLogout}>Logout</button>
    </div>
  ) : (
    <div>
      <button onClick={startLogin}>LogIn</button>
    </div>
  );

const mapStateToProps = (state) => {
  console.log(state);
  return { isLoggedIn: state.auth.uid };
};

const mapDispatchToProps = {
  startLogin,
  startLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginOutBtn);
