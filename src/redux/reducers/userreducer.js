export const userReducers = (state = {}, action = {}) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      console.log(action.user);
      return action.user;

    case "UPDATE_USER":
      console.log("UPDATE_USER", action);
      return { ...state, ...action.update };

    default:
      return state;
  }
};
