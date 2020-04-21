import React from "react";
import LoginOutBtn from "../LoginLogoutBtn/LoginOutBtn";
import { Header, Grid } from "semantic-ui-react";

const Navigation = () => {
  return (
    <Grid padded verticalAlign="middle">
      <Grid.Row columns={2} color="violet">
        <Grid.Column>
          <Header as="h2" inverted>
            Movie Mogul
          </Header>
        </Grid.Column>
        <Grid.Column>
          <LoginOutBtn isFloated="right" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Navigation;
