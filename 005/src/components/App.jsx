import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        //2/ Istotą Reacta jest tworzenie reużywalnych komponentów.
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
