import React from "react";

import { Button } from "semantic-ui-react";

import { connect } from "react-redux";
import { openModal } from "./../../../redux/actions/modal";

const NewRequestBtn = ({ openModal }) => {
  const handleOpenNewReqeust = () => {
    console.log("click");
    openModal({ modalType: "requestForm", modalProps: { bNewRequest: true } });
  };
  return (
    <Button fluid inverted color="blue" onClick={handleOpenNewReqeust}>
      Request
    </Button>
  );
};

const mapDispatchToProps = {
  openModal,
};

export default connect(undefined, mapDispatchToProps)(NewRequestBtn);
