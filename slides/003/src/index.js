import React    from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="todo" />
          <button>Add Todo</button>
        </form>
        <ul>
          <li>Todo 1</li>
          <li>Todo 2</li>
          <li>Todo 3</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
