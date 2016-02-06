import React from "react";

class TodoList extends React.Component {
  render() {
    const todos = [ "Task 1", "Task 2", "Task 3" ];
    return (
      <div className="todo-list">
        <ul>{ todos.map(todo => <li key={ todo }>{ todo }</li>) }</ul>
      </div>
    );
  }
}

export default TodoList;
