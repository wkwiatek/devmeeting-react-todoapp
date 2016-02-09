import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "./middleware/logger";
import todos from "./reducers/todos";
import thunk from "redux-thunk";

// Potrzebujemy jeszcze redux-thunk do asynchronicznych akcji
const store = applyMiddleware(thunk, logger)(createStore)(combineReducers({ todos }));

export default store;
