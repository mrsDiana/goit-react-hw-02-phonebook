import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul
      style={{
        listStyleType: 'none',
      }}
    >
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
