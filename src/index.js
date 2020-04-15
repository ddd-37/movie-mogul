import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import RequestList from "./Components/RequestList/RequestList";
import ModalRootContainer from "./Components/Modal/ModalRootContainer";

//REDUX
import configureStore from "../src/redux/store/configurestore";
import { Provider } from "react-redux";
import { startGetRequests } from "./redux/actions/requests";
import { login, logout } from "./redux/actions/auth";

//FIREBASE
import { firebase } from "./Firebase/Firebase";
import Header from "./Components/Header/Header";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Header />
    <RequestList />
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
    renderApp();
    console.log("user", user.uid);
  } else {
    store.dispatch(logout());
    renderApp();
  }
});
