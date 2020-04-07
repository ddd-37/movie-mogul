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
  isVisible: false,
  modalType: null,
  modalProps: {},
};
export const modalReducers = (state = initialModalState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isVisible: true };

    case "CLOSE_MODAL":
      return { ...state, isVisible: false };
    default:
      return state;
  }
};
