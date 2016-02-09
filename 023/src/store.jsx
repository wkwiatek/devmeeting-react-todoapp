import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "./middleware/logger";
import todos from "./reducers/todos";

// Tak wrzucamy nasz middleware do createStore
const store = applyMiddleware(logger)(createStore)(combineReducers({ todos }));

export default store;
