import React from "react";

class TodoList extends React.Component {
  render() {
    // Dodajmy listę todosów
    const todos = [ "Task 1", "Task 2", "Task 3" ];
    return (
      <div className="todo-list">
        // W jsx możemy korzystać z czystego JSa używając {}
        <ul>{ todos.map(todo => <li key={ todo }>{ todo }</li>) }</ul>
      </div>
    );
  }
}

export default TodoList;
