import { createStore, combineReducers } from "redux";
import todos from "./reducers/todos";

// Teraz spinamy reduktory i tworzymy store
const store = createStore(combineReducers({ todos }));

export default store;
