import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { requestReducers } from "./../reducers/requestReducer";
import { modalReducers } from "./../reducers/modalReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      requests: requestReducers,
      modal: modalReducers,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
