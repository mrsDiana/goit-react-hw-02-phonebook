import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
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
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: 20,
        }}
      >
        <h1
          style={{
            color: ' #008997',
          }}
        >
          Phonebook
        </h1>
        <ContactForm onClick={this.onSubmitClick}></ContactForm>
        <h2
          style={{
            color: '#0367a6',
          }}
        >
          Contacts
        </h2>
        {!contacts && (
          <Filter value={filter} onFilter={this.onFilterName}></Filter>
        )}

        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.onDelete}
        ></ContactList>
      </div>
    );
  }
}
