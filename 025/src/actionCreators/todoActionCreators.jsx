import axios from "axios";
import {
  ADD_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "../actionTypes/todoActionTypes";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: { todo },
  };
}

function fetchTodosRequest() {
  return {
    type: FETCH_TODOS_REQUEST,
  };
}

function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: { todos },
  };
}

function fetchTodosFailure(error) {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error,
    error: true,
  };
}

export function fetchTodos() {
  return dispatch => {
    dispatch(fetchTodosRequest());
    axios.get("todos.json")
      .then(({ data }) => dispatch(fetchTodosSuccess(data)))
      .catch((error) => dispatch(fetchTodosFailure(error)));
  };
}
