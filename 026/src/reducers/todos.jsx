import {
  ADD_TODO,
  FETCH_TODOS_SUCCESS,
} from "../actionTypes/todoActionTypes";

export default function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload.todo];
    //2/ Podpięcie akcji do reduktora
    case FETCH_TODOS_SUCCESS:
      return action.payload.todos;
    default:
      return state;
  }
}
