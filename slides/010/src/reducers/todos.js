import { ADD_TODO } from "app/actionTypes/todoActionTypes";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload.todo];
    default:
      return state;
  }
}

export default todos;
