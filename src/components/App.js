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

  newTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  render() {
    return (
      <div className="app">
        <TodoForm newTodo={ ::this.newTodo } />
        <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
