import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div className="todo-form">
        <form>
          <input type="text" name="todo" onChange={ ::this.handleChange } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
