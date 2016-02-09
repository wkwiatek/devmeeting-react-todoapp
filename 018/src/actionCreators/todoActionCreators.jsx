import {
  ADD_TODO,
} from "../actionTypes/todoActionTypes";

//6/ Teraz tworzymy samą akcję
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: { todo },
  };
}
