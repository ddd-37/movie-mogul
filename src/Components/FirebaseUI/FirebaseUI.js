import React from "react";
import { Container, Header, Message } from "semantic-ui-react";

const FirebaseUI = () => {
  return (
    <Container textAlign="center">
      <Header inverted as="h1">
        Movie Mogul
      </Header>
      <Message compact>
        <Message.Header>Sign in/up</Message.Header>
        <p>
          Feel free to choose your prefered method of signing into Movie Mogul
        </p>
        <div id="firebaseui-auth-container"></div>
      </Message>
    </Container>
  );
};

export default FirebaseUI;
