import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  //4/ 2. I zatrzymajmy domyślną akcję 
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div className="todo-form">
        // 1. Stórzmy teraz event na submit
        <form onSubmit={ ::this.handleSubmit }>
          <input type="text" name="todo" onChange={ ::this.handleChange } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
