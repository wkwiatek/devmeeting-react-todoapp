import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "./middleware/logger";
import todos from "./reducers/todos";
import thunk from "redux-thunk";
import DevTools from "app/components/DevTools";

const store = compose(
  applyMiddleware(thunk, logger),
  DevTools.instrument()
)(createStore)(combineReducers({ todos }));

export default store;
