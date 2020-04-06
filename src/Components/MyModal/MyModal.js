import React, { Component } from "react";
import { Modal, Header, Button } from "semantic-ui-react";

class MyModal extends Component {
  state = {
    modalOpen: true,
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal open={this.state.modalOpen} basic onClose={this.handleClose}>
        {this.props.header && <Header>{this.props.header}</Header>}
        {this.props.content && (
          <Modal.Content>{this.props.content}</Modal.Content>
        )}
        <Modal.Actions>
          <Button color="green" inverted onClick={this.props.actionClick}>
            {this.props.actionText || "Confirm"}
          </Button>
          <Button color="red" inverted onClose={this.handleClose}>
            {this.props.cancelText || "Cancel"}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default MyModal;
