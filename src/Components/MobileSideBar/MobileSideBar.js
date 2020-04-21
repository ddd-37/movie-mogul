import React, { Component } from "react";

import { Icon, Menu, Sidebar } from "semantic-ui-react";

import Burger from "./Burger/Burger";
import LoginOutBtn from "../ActionBtns/LoginLogoutBtn/LoginOutBtn";
import NewRequestBtn from "../ActionBtns/NewRequestBtn/NewRequestBtn";

class MobileSideBar extends Component {
  state = {
    isVisible: false,
  };

  toggleSidebar = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Burger clicked={this.toggleSidebar} isActive={this.state.isVisible} />

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
          <Menu.Item onClick={this.toggleSidebar}>
            <NewRequestBtn />
          </Menu.Item>
          <Menu.Item>
            <LoginOutBtn />
          </Menu.Item>
        </Sidebar>
      </>
    );
  }
}

export default MobileSideBar;
