import React from "react";

import "./../../../styles/burger.scss";

const Burger = ({ isActive, clicked }) => {
  return (
    <div
      className={"Burger " + (isActive ? "is-active" : "")}
      onClick={clicked}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <polygon
          points="0,0 100,0 0,100"
          className="Burger__triangle"
        ></polygon>
      </svg>
      <div className="Burger__inner"></div>
    </div>
  );
};

export default Burger;
