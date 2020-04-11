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

const store = configureStore();
const App = (
  <Provider store={store}>
    <Header>Welcome to Movie Mogul</Header>
    <RequestList />
    <ModalRootContainer />
  </Provider>
);

ReactDOM.render(<p>Loading..</p>, document.getElementById("root"));

store.dispatch(startGetRequests()).then(() => {
  ReactDOM.render(App, document.getElementById("root"));
});
