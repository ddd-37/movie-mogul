import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { requestReducers } from "./../reducers/requestReducer";
import { modalReducers } from "./../reducers/modalReducer";
import authreducer from "../reducers/authreducer";
import thunk from "redux-thunk";
import { userReducers } from "./../reducers/userreducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      requests: requestReducers,
      modal: modalReducers,
      auth: authreducer,
      user: userReducers,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
