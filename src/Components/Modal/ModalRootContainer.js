import React from "react";
import { connect } from "react-redux";
import DeleteRequestModal from "./ModalTypes/DeleteRequestModal";
import FormRequestModal from "./ModalTypes/FormRequestModal";

const MODAL_COMPONENTS = {
  deleteRequest: DeleteRequestModal,
  requestForm: FormRequestModal,
};

const ModalRootContainer = (props) => {
  if (!props.modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[props.modalType];
  console.log("ModalRootContainer -> props.modalType", props.modalType);

  return <SpecificModal modalProps={props.modalProps} />;
};

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
  };
};

export default connect(mapStateToProps)(ModalRootContainer);
