import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import store from "../store";
import { addTodo, fetchTodos } from "../actionCreators/todoActionCreators";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
  }

  //5/ Przy tworzeniu komponentu robimy fetch
  componentDidMount() {
    this.unsubscribe = store.subscribe(::this.onChange);

    store.dispatch(fetchTodos());
  }

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
