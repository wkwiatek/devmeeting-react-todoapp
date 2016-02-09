import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

//10/ Mamy już 3 działające komponenty.
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
