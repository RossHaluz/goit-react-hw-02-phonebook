import {
  Contacts,
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
} from './ContactsList.styled';

const ContactsList = ({ contacts }) => {
  return (
    <Contacts>
      {contacts.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            <ContactsItemName>{contact.name}:</ContactsItemName>
            <ContactsItemNumber> {contact.number}</ContactsItemNumber>
          </ContactsItem>
        );
      })}
    </Contacts>
  );
};

export default ContactsList;
