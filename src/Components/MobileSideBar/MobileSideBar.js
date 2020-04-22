import React, { Component } from "react";

import { Menu, Sidebar } from "semantic-ui-react";

import Burger from "./Burger/Burger";
import LoginOutBtn from "../ActionBtns/LoginLogoutBtn/LoginOutBtn";
import NewRequestBtn from "../ActionBtns/NewRequestBtn/NewRequestBtn";
import NavLinkBtn from "../ActionBtns/NavLinkBtn/NavLinkBtn";

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
          style={{ top: "3.9rem" }}
          onClick={this.toggleSidebar}
        >
          <Menu.Item>
            <NewRequestBtn />
          </Menu.Item>
          <Menu.Item>
            <NavLinkBtn color="purple" url="/dashboard" text="Dashboard" />
          </Menu.Item>
          <Menu.Item>
            <NavLinkBtn color="violet" url="/settings" text="Account" />
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
