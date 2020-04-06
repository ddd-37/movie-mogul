import { compareValues } from "./../../utils/compareValues";

export const requestReducers = (state = [], action = {}) => {
  switch (action.type) {
    case "NEW_REQUEST":
      console.log("NEW_REQUEST", action);
      return [...state, action.request];
    case "REMOVE_REQUEST":
      return [...state].filter((request) => request.id !== action.id);
    case "SORT_ITEMS":
      return [...state].sort(
        compareValues(action.config.sortBy, action.config.order)
      );
    default:
      return [...state];
  }
};

const initialModalState = {
  modalType: null,
  modalProps: {
    open: false,
  },
};
export const modalReducers = (state = initialModalState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type,
      };

    case "CLOSE_MODAL":
      return initialModalState;
    default:
      return state;
  }
};
