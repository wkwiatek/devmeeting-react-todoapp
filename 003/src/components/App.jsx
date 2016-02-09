// 1. Korzystając z modułów ES6 importujemy Reacta
import React from "react";

//5/ 2. Dziedziczymy po klasie React.Component implementując metodę render()
class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

// 3. Gdy moduł App jest gotowy - eksportujemy go.
export default App;
