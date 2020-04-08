import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import { Header } from "semantic-ui-react";
//REDUX
import configureStore from "../src/redux/store/configurestore";

import { Provider } from "react-redux";
import { addRequest } from "./redux/actions/requests";
import faker from "faker";
import RequestList from "./Components/RequestList/RequestList";
import ModalRootContainer from "./Components/Modal/ModalRootContainer";

const store = configureStore();

// Set up some dumy date
const dummyUsers = ["Devon", "Sid", "Finn"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

for (var i = 0; i < 10; i++) {
  store.dispatch(
    addRequest({
      createdAt: randomDate(new Date(2020, 2, 1), new Date()),
      requestedBy: dummyUsers[getRandomInt(3)],
      title: faker.commerce.productName(),
      note: "Please find the original versions",
    })
  );
}

const App = () => (
  <Provider store={store}>
    <Header>Welcome to Movie Mogul</Header>
    <RequestList />
    <ModalRootContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
