import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  submitHandler = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onClick(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };
  handelChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handelChangeNumber = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    return (
      <form name="phoneBook" autoComplete="on" onSubmit={this.submitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handelChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handelChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
