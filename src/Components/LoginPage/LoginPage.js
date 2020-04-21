import React from "react";
import LoginOutBtn from "../ActionBtns/LoginLogoutBtn/LoginOutBtn";
import { Container, Header } from "semantic-ui-react";

const LoginPage = () => {
  return (
    <Container textAlign="center" style={{ paddingTop: "3rem" }}>
      <Header as="h1">Welcome to Movie Mogul</Header>
      <LoginOutBtn />
    </Container>
  );
};

export default LoginPage;
