import React from "react";

import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavLinkBtn = ({ color, url, text }) => {
  return (
    <NavLink to={url}>
      <Button fluid inverted color={color}>
        {text}
      </Button>
    </NavLink>
  );
};

export default NavLinkBtn;
