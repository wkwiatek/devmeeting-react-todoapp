import React from "react";

class TodoList extends React.Component {
  static propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.string),
  };

  render() {
    return (
      <ul>{ this.props.todos.map(todo => <li key={todo}>{ todo }</li>) }</ul>
    );
  }
}

export default TodoList;
