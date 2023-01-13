import React, { Component } from 'react';
import { Container } from './App.styled';
import ContactForm from 'components/AddContacts';

class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
      </Container>
    );
  }
}

export default App;
