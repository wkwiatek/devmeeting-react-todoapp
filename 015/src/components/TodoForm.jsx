import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  //4/ 3. Odwołujemy się do funkcji przekazanej jako props
  handleSubmit(e) {
    e.preventDefault();
    this.props.newTodo(this.state.todo);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={ ::this.handleSubmit }>
          <input type="text" name="todo" onChange={ ::this.handleChange } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
