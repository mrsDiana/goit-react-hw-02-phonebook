import React, { Component } from 'react';

export class ContactForm extends Component {
  // This.props.onSubmit  додаємо з Арр

  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <form name="phoneBook" autoComplete="off">
        <label>
          Name
          <input
            type="text"
            name="name"
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
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        {/* <button type="submit" onClick={() => onSubmit()}> */}
        {/* Add contact
        </button> */}
      </form>
    );
  }
}
