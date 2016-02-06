import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "./middleware/logger";
import todos from "./reducers/todos";

const store = applyMiddleware(logger)(createStore)(combineReducers({ todos }));

export default store;
