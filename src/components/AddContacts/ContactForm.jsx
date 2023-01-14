import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormContact,
  FormLable,
  FormInput,
  FormButton,
} from './ContactForm.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(10).max(12).required(),
});

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
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmitForm}
    >
      <FormContact>
        <FormLable htmlFor="">Name</FormLable>
        <FormInput type="text" name="name" />
        <ErrorMessage component="p" name="name" />

        <FormLable htmlFor="">Number</FormLable>
        <FormInput type="tel" name="number" />
        <ErrorMessage component="p" name="number" />

        <FormButton type="submit">Add contact</FormButton>
      </FormContact>
    </Formik>
  );
};

export default ContactForm;
