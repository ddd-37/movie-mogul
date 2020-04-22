export const userReducers = (state = {}, action = {}) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      console.log(action.user);
      return action.user;

    default:
      return state;
  }
};
