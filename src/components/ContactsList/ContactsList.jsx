import {
  Contacts,
  ContactsItem,
  ContactsItemName,
} from './ContactsList.styled';

const ContactsList = ({ contacts }) => {
  return (
    <Contacts>
      {contacts.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            <ContactsItemName>{contact.name}:</ContactsItemName>
            <span> {contact.number}</span>
          </ContactsItem>
        );
      })}
    </Contacts>
  );
};

export default ContactsList;
