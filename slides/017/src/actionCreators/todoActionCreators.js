import {
  ADD_TODO,
} from "../actionTypes/todoActionTypes";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: { todo },
  };
}
