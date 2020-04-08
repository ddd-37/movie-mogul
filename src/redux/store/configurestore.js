import { createStore, combineReducers } from "redux";
import { requestReducers } from "./../reducers/requestReducer";
import { modalReducers } from "./../reducers/modalReducer";

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
