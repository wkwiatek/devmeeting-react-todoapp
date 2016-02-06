import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
