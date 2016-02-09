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

  //3/ 2. Chcemy dostać nową tablicę, więc unikamy .push()
  newTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  render() {
    return (
      <div className="app">
        { /* // 1. Do komponentu możemy przekazać też funkcję */ }
        <TodoForm newTodo={ ::this.newTodo } />
        <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
