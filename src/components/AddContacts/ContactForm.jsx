import React, { Component } from 'react';
import {
  FormContact,
  FormLable,
  FormInput,
  FormButton,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <FormContact onSubmit={this.onSubmitForm}>
        <FormLable htmlFor="">Name</FormLable>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.onChangeInput}
        />

        <FormLable htmlFor="">Number</FormLable>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.onChangeInput}
        />

        <FormButton type="submit">Add contact</FormButton>
      </FormContact>
    );
  }
}

export default ContactForm;
