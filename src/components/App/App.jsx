import React, { Component } from 'react';
import { Container, ContactsListTitle, PhonebookTitle } from './App.styled';
import ContactForm from 'components/AddContacts';
import ContactsList from 'components/ContactsList';
import FilterContacts from 'components/FilterContacts';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getNewContact = ({ name, number, id }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onChancheInputFilter = e => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleTodo = contacts.filter(contact =>
      contact.name.includes(filter)
    );

    return (
      <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm setContact={this.getNewContact} />
        <ContactsListTitle>Contacts</ContactsListTitle>
        <h3>Find contacts by name</h3>
        <FilterContacts
          inputValue={filter}
          changeFilterValue={this.onChancheInputFilter}
        />
        <ContactsList contacts={visibleTodo} />
      </Container>
    );
  }
}

export default App;
