import React from "react";
import RequestList from "../RequestList/RequestList";
import { Container } from "semantic-ui-react";

const DashboardPage = () => {
  return (
    <Container style={{ paddingTop: "5rem" }}>
      <RequestList />
    </Container>
  );
};

export default DashboardPage;
