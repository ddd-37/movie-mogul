import React, { Component } from "react";
import { Modal, Header, Button } from "semantic-ui-react";
import { connect } from "react-redux";

const MyModal = (props) => {
  const handleOpen = () => this.setState({ modalOpen: true });

  const handleClose = () => props.dispatch({ type: "CLOSE_MODAL" });

  console.log(props);
  return (
    <Modal open={props.modal.isVisible} basic onClose={handleClose}>
      {props.header && <Header>{props.header}</Header>}
      {props.content && <Modal.Content>{props.content}</Modal.Content>}
      <Modal.Actions>
        <Button color="green" inverted onClick={props.actionClick}>
          {props.actionText || "Confirm"}
        </Button>
        <Button color="red" inverted onClick={handleClose}>
          {props.cancelText || "Cancel"}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(mapStateToProps)(MyModal);
