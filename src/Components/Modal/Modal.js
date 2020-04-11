import React, { Component } from "react";

import "./../../styles/modal.scss";

class Modal extends Component {
  listenKeyboard(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      this.props.onClose();
    }
  }

  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener("keydown", this.listenKeyboard.bind(this), true);
    }
  }

  onOverlayClick() {
    this.props.onClose();
  }

  onDialogClick(e) {
    e.stopPropagation();
  }

  componenttWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener(
        "keydown",
        this.listenKeyboard.bind(this),
        true
      );
    }
  }

  render() {
    return (
      <div className="modal-overlay-div">
        <div
          className="modal-content-div"
          onClick={this.onOverlayClick.bind(this)}
        >
          <div className="modal-dialog-div" onClick={this.onDialogClick}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
