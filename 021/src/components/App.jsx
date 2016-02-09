import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import store from "../store";
import { addTodo } from "../actionCreators/todoActionCreators";

class App extends React.Component {

  //5/ Stan komponentu otrzymujemy ze store'a
  constructor(props) {
    super(props);

    this.state = store.getState();
  }

  //3/ I podpinamy się pod zmiany
  componentDidMount() {
    this.unsubscribe = store.subscribe(::this.onChange);
  }

  //3/ Musimy pamiętać o wyłączeniu nasłuchiwania, gdy komponentu już nie ma
  componentWillUnmount() {
    this.unsubscribe();
  }

  onChange() {
    this.setState(store.getState());
  }

  render() {
    return (
      <div className="app">
        <TodoForm newTodo={ (todo) => store.dispatch(addTodo(todo)) } />
        <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
