import React    from "react";
import ReactDOM from "react-dom";
import TodoForm from "app/components/TodoForm";
import TodoList from "app/components/TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
       <TodoForm />
       <TodoList />
      </div>
    );
  }
}

export default App;
