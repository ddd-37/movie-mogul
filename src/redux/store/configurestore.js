import { createStore, combineReducers } from "redux";
import { requestReducers, modalReducers } from "../reducers";

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      requests: requestReducers,
      modal: modalReducers,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
