import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

//3/ 2. przenieśmy ją poziom wyżej
class App extends React.Component {
  render() {
    const todos = [ "Task 1", "Task 2", "Task 3" ];
    return (
      <div className="app">
        <TodoForm />
        // I przekazujmy jako parametr.
        <TodoList todos={ todos } />
      </div>
    );
  }
}

export default App;
