const initialModalState = {
  modalType: null,
};
export const modalReducers = (state = initialModalState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      console.log("buingo");
      return {
        ...state,
        modalType: action.modalType,
        modalProps: { ...action.modalProps },
      };

    case "CLOSE_MODAL":
      return { initialModalState };
    default:
      return state;
  }
};
