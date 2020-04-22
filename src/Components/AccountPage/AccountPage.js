import React from "react";

import { connect } from "react-redux";

import { Container, Header } from "semantic-ui-react";
import FormUpdateAccount from "./FormUpdateAccount/FormUpdateAccount";

const AccountPage = ({ user }) => {
  console.log(user.providerData);
  return (
    <Container>
      <Header as="h1" textAlign="center" dividing style={{ padding: "2rem" }}>
        Account Settings
      </Header>
      <FormUpdateAccount />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(AccountPage);
