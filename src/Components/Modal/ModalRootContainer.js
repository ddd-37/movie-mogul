import React from "react";
import { connect } from "react-redux";
import DeleteRequestModal from "./DeleteRequestModal";

const MODAL_COMPONENTS = {
  deleteRequest: DeleteRequestModal,
};

const ModalRootContainer = (props) => {
  if (!props.modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[props.modalType];

  return <SpecificModal payload={props.payload} />;
};

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    payload: state.modal.payload,
  };
};

export default connect(mapStateToProps)(ModalRootContainer);
