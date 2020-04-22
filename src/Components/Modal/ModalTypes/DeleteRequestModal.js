import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "semantic-ui-react";
import { startRemoveRequest } from "../../../redux/actions/requests";
import { closeModal } from "../../../redux/actions/modal";
import Modal from "../Modal";

const DeleteRequestModal = ({ modalProps, startRemoveRequest, closeModal }) => {
  const onClose = () => {
    closeModal();
  };

  const confirmRequest = (id) => {
    startRemoveRequest({ id });
    closeModal();
  };

  return (
    <Modal onClose={onClose}>
      <Card>
        <Card.Content>
          <h1>Delete Request</h1>
          <p>Are you sure you want to delete this modal?</p>
          <Button
            inverted
            color="green"
            onClick={() => confirmRequest(modalProps.id)}
          >
            Yes
          </Button>
          <Button inverted color="red" onClick={onClose}>
            No
          </Button>
        </Card.Content>
      </Card>
    </Modal>
  );
};

const mapDispatchToProps = {
  startRemoveRequest,
  closeModal,
};

export default connect(undefined, mapDispatchToProps)(DeleteRequestModal);
