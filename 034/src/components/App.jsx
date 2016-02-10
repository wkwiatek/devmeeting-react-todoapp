import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import DevTools from "./DevTools";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actionCreators/todoActionCreators";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    //7/ Dodajmy devtools do komponentu App
    return (
      <div className="app">
        <TodoForm newTodo={ this.props.addTodo } />
        <TodoList todos={ this.props.todos } />
        <DevTools />
      </div>
    );
  }
}

export default connect(state => state, dispatch => ({
  ...bindActionCreators(actions, dispatch)
}))(App);
