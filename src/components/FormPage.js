import React from "react";

class FormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
    };
  }

  _validationHash(input) {
    return { [input.name]: input.dataset.message || input.validationMessage };
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.checkValidity()
    const errors = [].slice.apply(e.target.querySelectorAll("input"))
      .reduce((msgs, input) => ({...msgs, ...this._validationHash(input) }), {});

    this.setState({ errors });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
      errors: {...this.state.errors, ...this._validationHash(input)},
    });
  }

  render() {
    return (
      <div className="form-page">
        <form onSubmit={ ::this.handleSubmit } noValidate>
          <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={ ::this.handleChange }
              required
            />
            <div className="error">{ this.state.errors.email }</div>
          </label>
          <label>
            Price:
            <input
              type="number"
              name="number"
              min="0"
              max="100"
              step="0.01"
              onChange={ ::this.handleChange }
            />
            <div className="error">{ this.state.errors.number }</div>
          </label>
          <label>
            IPv4:
            <input
              type="ip"
              name="ip"
              pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
              data-message="It's not valid IP address"
              onChange={ ::this.handleChange }
              required
            />
            <div className="error">{ this.state.errors.ip }</div>
          </label>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default FormPage;
