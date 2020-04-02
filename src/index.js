import React from "react";
import ReactDOM from "react-dom";

// STYLES
import "normalize.css/normalize.css";

// COMPONENTS
import App from "./Components/App/App";

//REDUX
import configureStore from "../src/redux/store/configurestore";

import { Provider } from "react-redux";
import { addRequest } from "./redux/actions/index";
import faker from "faker";
const store = configureStore();

for (var i = 0; i < 11; i++) {
  store.dispatch(
    addRequest({
      title: faker.commerce.productName(),
      note: "Please find the original versions"
    })
  );
}

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
