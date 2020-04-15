import { firebase, googleAuthProvider } from "../../Firebase/Firebase";

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogin = () => {
  // Async to we need to return it
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT",
});

export const startLogOUt = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
