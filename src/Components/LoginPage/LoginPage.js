import React from "react";
import LoginOutBtn from "../LoginLogoutBtn/LoginOutBtn";
import { Header } from "semantic-ui-react";

const LoginPage = () => {
  return (
    <>
      <Header as="h1" style={{ display: "inline-block" }}>
        Welcome to Movie Mogul
      </Header>
      <LoginOutBtn />
    </>
  );
};

export default LoginPage;
