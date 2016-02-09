import React from "react";
import DevTools from "./DevTools";
import TodoPage from "./TodoPage";

class App extends React.Component {
  render() {
    //6/ Cała logika todosów może iść do jednego miejsca
    return (
      <div className="app">
        <TodoPage />
        <DevTools />
      </div>
    );
  }
}

export default App;
