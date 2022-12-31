import PropTypes from 'prop-types';
import { ContactItem, Delete } from './ContactList.styled';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <Delete onClick={() => onDeleteContact(id)}>Delete</Delete>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}.isRequired;
