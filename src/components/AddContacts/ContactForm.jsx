import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  FormContact,
  FormLable,
  FormInput,
  FormButton,
} from './ContactForm.styled';

const ContactForm = ({ setContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const onSubmitForm = (values, { resetForm }) => {
    setContact(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
      <FormContact>
        <FormLable htmlFor="">Name</FormLable>
        <FormInput type="text" name="name" />

        <FormLable htmlFor="">Number</FormLable>
        <FormInput type="tel" name="number" />

        <FormButton type="submit">Add contact</FormButton>
      </FormContact>
    </Formik>
  );
};

export default ContactForm;
