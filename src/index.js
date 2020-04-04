import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import App from "./Components/App/App";

//REDUX
import configureStore from "../src/redux/store/configurestore";

import { Provider } from "react-redux";
import { addRequest } from "./redux/actions/requests";
import faker from "faker";
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

for (var i = 0; i < 15; i++) {
  store.dispatch(
    addRequest({
      createdAt: randomDate(new Date(2020, 2, 1), new Date()),
      requestedBy: dummyUsers[getRandomInt(3)],
      title: faker.commerce.productName(),
      note: "Please find the original versions"
    })
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
