import React from "react";
import RequestList from "../RequestList/RequestList";
import { Container, Header } from "semantic-ui-react";

const DashboardPage = () => {
  return (
    <Container>
      <Header
        as="h1"
        textAlign="center"
        dividing
        style={{ padding: "2rem" }}
        inverted
      >
        Dashboard
      </Header>
      <RequestList />
    </Container>
  );
};

export default DashboardPage;
