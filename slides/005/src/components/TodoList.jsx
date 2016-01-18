import React from "react";

class TodoList extends React.Component {
  render() {
    const todos = ["Todo 1", "Todo 2", "Todo 3"];
    return (
      <ul>{ todos.map(todo => <li key={todo}>{ todo }</li>) }</ul>
    );
  }
}

export default TodoList;
