import React from "react";
import { Container, Header, Card } from "semantic-ui-react";

const FirebaseUI = () => {
  return (
    <Container fluid>
      <Header as="h1" textAlign="centered">
        Movie Mogul
      </Header>
      <Card centered>
        <p>Sign in/up with your preferred method!</p>
        <div id="firebaseui-auth-container"></div>
      </Card>
    </Container>
  );
};

export default FirebaseUI;
