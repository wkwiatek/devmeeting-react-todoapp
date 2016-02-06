import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actionCreators/todoActionCreators";

class TodoPage extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="todo-page">
        <TodoForm newTodo={ this.props.addTodo } />
        <TodoList todos={ this.props.todos } />
      </div>
    );
  }
}

export default connect(state => state, dispatch => ({
  ...bindActionCreators(actions, dispatch)
}))(TodoPage);
