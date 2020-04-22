import React from "react";

import { Header, Grid, Responsive } from "semantic-ui-react";

import MobileSideBar from "./../MobileSideBar/MobileSideBar";
import LoginOutBtn from "./../ActionBtns/LoginLogoutBtn/LoginOutBtn";
import NavLinkBtn from "../ActionBtns/NavLinkBtn/NavLinkBtn";

const Navigation = () => {
  return (
    <>
      <Responsive minWidth={992}>
        <Grid padded verticalAlign="middle" columns="equal">
          <Grid.Row color="violet">
            <Grid.Column width={10}>
              <Header as="h2" inverted>
                Movie Mogul
              </Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <NavLinkBtn color="purple" url="/dashboard" text="Dashboard" />
            </Grid.Column>
            <Grid.Column width={2}>
              <NavLinkBtn color="violet" url="/settings" text="Account" />
            </Grid.Column>
            <Grid.Column width={2}>
              <LoginOutBtn floated="right" />
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
