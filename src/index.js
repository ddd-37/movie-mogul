import React from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";

// COMPONENTS
import ModalRootContainer from "./Components/Modal/ModalRootContainer";

//REDUX
import configureStore from "../src/redux/store/configurestore";
import { Provider } from "react-redux";
import { login, logout } from "./redux/actions/auth";

//FIREBASE
import { firebase } from "./Firebase/Firebase";
import AppRouter, { history } from "./Components/AppRouter/AppRouter";
import { startGetRequests } from "./redux/actions/requests";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
    <ModalRootContainer />
  </Provider>
);

let hasRendered = false;
// Function to handle when the app renders
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

console.log("store", store.getState());

ReactDOM.render(<p>Loading..</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startGetRequests()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
