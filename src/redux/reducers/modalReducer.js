const initialModalState = {
  modalType: null,
};
export const modalReducers = (state = initialModalState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modalType: action.modalType,
        payload: { ...action.payload },
      };

    case "CLOSE_MODAL":
      return { initialModalState };
    default:
      return state;
  }
};
