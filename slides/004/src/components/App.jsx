import React from "react";

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
