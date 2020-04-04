import { compareValues } from "./../../utils/compareValues";

export default (state = [], action = {}) => {
  switch (action.type) {
    case "NEW_REQUEST":
      return [...state, action.request];
    case "REMOVE_REQUEST":
      return [...state, action.request];
    case "SORT_ITEMS":
      console.log(action.config);
      return [...state].sort(
        compareValues(action.config.sortBy, action.config.order)
      );
    default:
      return [...state];
  }
};
