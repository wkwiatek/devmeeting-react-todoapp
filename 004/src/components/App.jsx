import React from "react";

class App extends React.Component {
  //12/ 1. Umieszczamy wszystkie potrzebne elementy.
  render() {
    //12/ 2. Uwaga: to nie jest html tylko jsx! (vide className)
    return (
      <div className="app">
        <form>
          <input type="text" /><input type="submit"/>
        </form>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
    );
  }
}

export default App;
