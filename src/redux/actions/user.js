import { firebase } from "./../../Firebase/Firebase";

export const getLoggedInUser = ({ user }) => ({
  type: "LOGGED_IN_USER",
  user,
});

export const updateUserProfile = (update) => ({
  type: "UPDATE_USER",
  update,
});

export const startUpdateUserProile = (update) => {
  console.log("startUpdateUserProile", update);
  return (dispatch) => {
    return firebase
      .auth()
      .currentUser.updateProfile({
        displayName: update,
      })
      .then(() => {
        dispatch(updateUserProfile(update));
        console.log("succes");
      })
      .catch((e) => {
        console.log("ERROR - startUpdateUserProile: ", e);
      });
  };
};
