import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <ul>{ this.props.todos.map(todo => <li key={todo}>{ todo }</li>) }</ul>
    );
  }
}

export default TodoList;
