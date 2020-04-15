import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import { Header } from "semantic-ui-react";
import RequestList from "./Components/RequestList/RequestList";
import ModalRootContainer from "./Components/Modal/ModalRootContainer";

//REDUX
import configureStore from "../src/redux/store/configurestore";
import { Provider } from "react-redux";
import { startGetRequests } from "./redux/actions/requests";
import { login, logout } from "./redux/actions/auth";

//FIREBASE
import { firebase } from "./Firebase/Firebase";
import Login from "./Components/Login/Login";

const store = configureStore();
const App = (
  <Provider store={store}>
    <Header>Movie Mogul</Header>
    <Login />
    <RequestList />
    <ModalRootContainer />
  </Provider>
);

console.log(firebase.auth.uid);
firebase.auth().onAuthStateChanged((user) => {
  console.log("user", user.uid);
  if (user) {
    store.dispatch(login(user.uid));
  } else {
    store.dispatch(logout());
  }
});
ReactDOM.render(<p>Loading..</p>, document.getElementById("root"));

store.dispatch(startGetRequests()).then(() => {
  ReactDOM.render(App, document.getElementById("root"));
});
