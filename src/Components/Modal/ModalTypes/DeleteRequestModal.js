import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "semantic-ui-react";
import { startRemoveRequest } from "../../../redux/actions/requests";
import { closeModal } from "../../../redux/actions/modal";
import Modal from "../Modal";

const DeleteRequestModal = (props) => {
  console.log("DeleteRequestModal -> props", props);
  const onClose = () => {
    props.dispatch(closeModal());
  };

  const confirmRequest = (id) => {
    console.log("confirmRequest -> id", id);
    props.dispatch(startRemoveRequest({ id }));
    props.dispatch(closeModal());
  };
  return (
    <Modal onClose={onClose}>
      <Card>
        <Card.Content>
          <h1>Delete Request</h1>
          <p>Are you sure you want to delete this modal?</p>
          <Button onClick={() => confirmRequest(props.modalProps.id)}>
            Yes
          </Button>
          <Button onClick={onClose}>No</Button>
        </Card.Content>
      </Card>
    </Modal>
  );
};

export default connect()(DeleteRequestModal);
