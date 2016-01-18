import { createStore, combineReducers } from "redux";
import todos from "app/reducers/todos";

const store = createStore(combineReducers({ todos }));

export default store;
