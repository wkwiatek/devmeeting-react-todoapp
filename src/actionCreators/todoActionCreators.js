import { ADD_TODO } from "app/actionTypes/todoActionTypes";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: { todo },
  };
}
