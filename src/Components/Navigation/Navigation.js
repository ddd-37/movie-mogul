import React from "react";

import { Header, Grid, Responsive } from "semantic-ui-react";

import MobileSideBar from "./../MobileSideBar/MobileSideBar";
import LoginOutBtn from "./../ActionBtns/LoginLogoutBtn/LoginOutBtn";

const Navigation = () => {
  return (
    <>
      <Responsive minWidth={992}>
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
      </Responsive>

      <Responsive maxWidth={992}>
        <Grid padded verticalAlign="middle">
          <Grid.Row color="violet" centered>
            <Header as="h2" inverted>
              Movie Mogul
            </Header>
          </Grid.Row>
          <MobileSideBar />
        </Grid>
      </Responsive>
    </>
  );
};

export default Navigation;
