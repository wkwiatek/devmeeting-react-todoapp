import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    const todos = [ "Task 1", "Task 2", "Task 3" ];
    return (
      <div className="app">
        <TodoForm />
        <TodoList todos={ todos } />
      </div>
    );
  }
}

export default App;
