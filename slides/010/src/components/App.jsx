import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  render() {
    return (
      <div className="app">
        <TodoForm />
        <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
