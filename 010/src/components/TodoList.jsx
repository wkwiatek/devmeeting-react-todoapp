import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        { /* // 1. Lista trzymana w komponencie to nienajlepszy pomysł */ }
        <ul>{ this.props.todos.map(todo =><li key={ todo }>{ todo }</li>) }</ul>
      </div>
    );
  }
}

export default TodoList;
