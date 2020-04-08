import { compareValues } from "../../utils/compareValues";

export const requestReducers = (state = [], action = {}) => {
  switch (action.type) {
    case "NEW_REQUEST":
      return [...state, action.request];
    case "REMOVE_REQUEST":
      return state.filter((request) => request.id !== action.id);
    case "EDIT_REQUEST":
      console.log("EDIT_REQUEST - action", action);
      return state.map((request) => {
        if (request.id === action.id) {
          return { ...request, ...action.updates };
        } else {
          return request;
        }
      });
    // ToDo - Think about if this is the right place for our sort stuff
    case "SORT_ITEMS":
      return [...state].sort(
        compareValues(action.config.sortBy, action.config.order)
      );
    default:
      return [...state];
  }
};
