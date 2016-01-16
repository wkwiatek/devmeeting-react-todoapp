import React    from "react";
import ReactDOM from "react-dom";
import TodoForm from "app/components/TodoForm";
import TodoList from "app/components/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Todo 1", "Todo 2", "Todo 3"],
    };
  }

  render() {
    return (
      <div>
       <TodoForm />
       <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
