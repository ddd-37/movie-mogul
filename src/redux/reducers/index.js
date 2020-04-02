export default (state = [], action = {}) => {
  switch (action.type) {
    case "NEW_REQUEST":
      return [...state, action.request];

    default:
      return [...state];
  }
};
