import React from "react";
import LoginOutBtn from "../LoginLogoutBtn/LoginOutBtn";
import { Header } from "semantic-ui-react";

const NavHeader = () => {
  return (
    <>
      <Header as="h1" style={{ display: "inline-block" }}>
        Movie Mogul
      </Header>
      <LoginOutBtn />
    </>
  );
};

export default NavHeader;
