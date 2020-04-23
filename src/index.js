import React from "react";
import ReactDOM from "react-dom";

// STYLES
import "./styles/base.scss";

// COMPONENTS
import ModalRootContainer from "./Components/Modal/ModalRootContainer";

//REDUX
import configureStore from "../src/redux/store/configurestore";
import { Provider } from "react-redux";
import { login, logout } from "./redux/actions/auth";

//FIREBASE
import { firebase, ui } from "./Firebase/Firebase";
import AppRouter, { history } from "./Components/AppRouter/AppRouter";
import { startGetRequests } from "./redux/actions/requests";
import { getLoggedInUser } from "./redux/actions/user";
import FirebaseUI from "./Components/FirebaseUI/FirebaseUI";

const store = configureStore();

// JSX to render if we find the user
const userFound = (
  <Provider store={store}>
    <AppRouter />
    <ModalRootContainer />
  </Provider>
);

let hasRendered = false;
// Function to handle when the app renders
const renderApp = (content) => {
  if (!hasRendered) {
    ReactDOM.render(content, document.getElementById("root"));
    hasRendered = true;
  }
};

// ToDo - Make a better loader
ReactDOM.render(<p>Loading..</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(getLoggedInUser({ user }));
    store.dispatch(startGetRequests()).then(() => {
      renderApp(userFound);
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp(<FirebaseUI />);
    // ToDo - move to reducer
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: "/dashboard",
      // Other config options...
    });
    history.push("/");
  }
});
