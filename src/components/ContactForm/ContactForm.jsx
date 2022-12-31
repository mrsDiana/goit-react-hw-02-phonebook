import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { Formik } from 'formik';
import {
  PhonebookForm,
  Lable,
  Input,
  Button,
} from 'components/ContactForm/ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  submitHandler = (values, { resetForm }) => {
    const { name, number } = this.state;
    if (this.props.onChecked(name)) {
      return Notiflix.Notify.failure(`${name} is already in contacts.`);
    }
    this.props.onClick(name, number);
    this.setState({
      name: '',
      number: '',
    });
    resetForm();
  };
  handelChangeName = e => {
    this.setState({ name: e.target.value.toLowerCase() });
  };

  handelChangeNumber = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.submitHandler}
      >
        <PhonebookForm name="phoneBook" autoComplete="on">
          <Lable>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handelChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Lable>
          <Lable>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handelChangeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Lable>
          <Button type="submit">Add contact</Button>
        </PhonebookForm>
      </Formik>
    );
  }
}
ContactForm.propTypes = {
  state: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  submitHandler: PropTypes.func,
  handelChangeName: PropTypes.func,
  handelChangeNumber: PropTypes.func,
};
