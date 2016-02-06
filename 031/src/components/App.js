import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import store from "../store";
import { connect } from "react-redux";
import { addTodo, fetchTodos } from "../actionCreators/todoActionCreators";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(fetchTodos());
  }

  render() {
    return (
      <div className="app">
        <TodoForm newTodo={ (todo) => store.dispatch(addTodo(todo)) } />
        <TodoList todos={ this.props.todos } />
      </div>
    );
  }
}

export default connect(state => state)(App);
