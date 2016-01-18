import React       from "react";
import ReactDOM    from "react-dom";
import TodoForm    from "app/components/TodoForm";
import TodoList    from "app/components/TodoList";
import store       from "app/store";
import { addTodo } from "app/actionCreators/todoActionCreators";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(::this.onChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onChange() {
    this.setState(store.getState());
  }

  render() {
    return (
      <div>
       <TodoForm onNewTodo={ (todo) => store.dispatch(addTodo(todo)) } />
       <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
