import React from "react";

import RequestList from "../RequestList/RequestList";
import {
  Container,
  Header,
  Divider,
  Grid,
  Responsive,
} from "semantic-ui-react";
import VisibilitySortDropdown from "./../VisibilitySortDropdown/VisibilitySortDropdown";
import NewRequestBtn from "./../ActionBtns/NewRequestBtn/NewRequestBtn";

const DashboardPage = () => {
  return (
    <>
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
        <Grid padded>
          <Grid.Row>
            <Header as="h3" inverted>
              Pending Requests
            </Header>
          </Grid.Row>
          <VisibilitySortDropdown />

          <Responsive minWidth={992}>
            <NewRequestBtn />
          </Responsive>
        </Grid>

        <Header as="h3" inverted>
          Movies
        </Header>
        <RequestList type="movie" />
        <Divider hidden />

        <Header as="h3" inverted>
          TV Shows
        </Header>
        <RequestList type="tv" />
      </Container>
    </>
  );
};

export default DashboardPage;
