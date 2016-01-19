import React from "react";

class TodoForm extends React.Component {
  handleChange(e) {
    console.log(e.target.name, e.target.value);
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
