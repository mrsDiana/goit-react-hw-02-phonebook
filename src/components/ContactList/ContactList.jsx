import { ContactItem, Delete } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);
  return (
    <ul
      style={{
        listStyleType: 'none',
      }}
    >
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <p>
              {name}: {number}
            </p>
            <Delete onClick={() => onDeleteContact(id)}>Delete</Delete>
          </ContactItem>
        );
      })}
    </ul>
  );
};
