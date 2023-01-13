import React, { Component } from 'react';
import { Container, ContactsListTitle, PhonebookTitle } from './App.styled';
import ContactForm from 'components/AddContacts';
import ContactsList from 'components/ContactsList';

class App extends Component {
  state = {
    contacts: [],
  };

  getNewContact = ({ name, number }) => {
    const contact = {
      id: 1,
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm setContact={this.getNewContact} />
        <ContactsListTitle>Contacts</ContactsListTitle>
        <ContactsList contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
