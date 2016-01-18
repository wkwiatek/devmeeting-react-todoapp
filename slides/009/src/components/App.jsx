import React    from "react";
import ReactDOM from "react-dom";
import TodoForm from "app/components/TodoForm";
import TodoList from "app/components/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  onNewTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  render() {
    return (
      <div>
       <TodoForm onNewTodo={ ::this.onNewTodo } />
       <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
