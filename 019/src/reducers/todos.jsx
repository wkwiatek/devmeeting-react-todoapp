import {
  ADD_TODO,
} from "../actionTypes/todoActionTypes";

//8/ Oraz reduktor - funkcję tworzącą nowy stan
export default function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      // Stan nie może być mutowany
      return [...state, action.payload.todo];
    default:
      return state;
  }
}
