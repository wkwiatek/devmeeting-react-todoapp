import React from "react";

//11/ Przenieśmy szablon html do nowego komonentu
class TodoForm extends React.Component {
  render() {
    return (
      <div className="todo-form">
        <form>
          <input type="text" /><input type="submit"/>
        </form>
      </div>
    );
  }
}

export default TodoForm;
