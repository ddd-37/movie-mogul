import { createStore, combineReducers } from "redux";
import reducers from "../reducers";

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      reducers
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
