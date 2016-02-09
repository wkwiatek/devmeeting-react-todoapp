import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    //3/ W React mamy do dyspozycji state.
    this.state = {
      todos: [],
    };
  }

  render() {
    return (
      <div className="app">
        <TodoForm />
        // Dzięki któremu React może śledzić zmiany
        <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
