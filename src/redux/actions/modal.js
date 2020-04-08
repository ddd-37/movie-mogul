export const openModal = ({ modalType, payload }) => ({
  type: "OPEN_MODAL",
  modalType,
  payload,
});

export const closeModal = () => ({
  type: "CLOSE_MODAL",
});
