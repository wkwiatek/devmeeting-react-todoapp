import React from "react";

class TodoForm extends React.Component {
  static propTypes = {
    newTodo: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { todo: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newTodo(this.state.todo);
    this.state.todo = "";
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={ ::this.handleSubmit }>
          <input
            type="text"
            name="todo"
            onChange={ ::this.handleChange }
            value={ this.state.todo }
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
