import React, { Component } from "react";

import { Icon, Menu, Sidebar } from "semantic-ui-react";

import Burger from "./Burger/Burger";
import LoginOutBtn from "../ActionBtns/LoginLogoutBtn/LoginOutBtn";

class MobileSideBar extends Component {
  state = {
    isVisible: false,
  };

  handleClickOnBurger = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Burger
          clicked={this.handleClickOnBurger}
          isActive={this.state.isVisible}
        />

        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={this.state.isVisible}
          width="thin"
          style={{ top: "3.9rem" }}
        >
          <Menu.Item>
            <LoginOutBtn />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">Channels</Menu.Item>
        </Sidebar>
      </>
    );
  }
}

export default MobileSideBar;
