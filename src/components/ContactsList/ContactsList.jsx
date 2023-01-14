import {
  Contacts,
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
} from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <ContactsItemName>{name}:</ContactsItemName>
            <ContactsItemNumber> {number}</ContactsItemNumber>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </ContactsItem>
        );
      })}
    </Contacts>
  );
};

export default ContactsList;
