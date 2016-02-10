import {
  ADD_TODO,
} from "../actionTypes/todoActionTypes";

//8/ Funkcję tworzącą nowy stan - reduktor
export default function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      // Stan nie może być mutowany
      return [...state, action.payload.todo];
    default:
      return state;
  }
}
