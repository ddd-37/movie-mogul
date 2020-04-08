export const openModal = ({ modalType, modalProps }) => ({
  type: "OPEN_MODAL",
  modalType,
  modalProps,
});

export const closeModal = () => ({
  type: "CLOSE_MODAL",
});
