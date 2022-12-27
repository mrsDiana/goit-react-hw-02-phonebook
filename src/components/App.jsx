import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitClick = (name, number) => {
    const contact = { id: nanoid(), name, number };
    const check = this.state.contacts.find(contact => contact.name === name);
    if (check) {
      return Notiflix.Notify.failure(`${name} is already in contacts.`);
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  onFilterName = e => {
    this.setState({
      filter: e.currentTarget.value.toLowerCase(),
    });
  };
  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <h1>Phonebook</h1>
        <ContactForm onClick={this.onSubmitClick}></ContactForm>
        <h2>Contacts</h2>
        <Filter value={filter} onFilter={this.onFilterName}></Filter>
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.onDelete}
        ></ContactList>
      </div>
    );
  }
}
