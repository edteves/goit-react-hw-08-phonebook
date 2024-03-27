import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contactsOperation';
import { Button } from '@chakra-ui/react'; // Remove Center import as it's not necessary

export const ContactListItem = ({ filteredContact }) => {
  const dispatch = useDispatch();

  // handleDelete method
  const handleDelete = () => {
    dispatch(deleteContact(filteredContact.id));
  };

  return (
    <ul
      style={{
        listStyle: 'none',
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '5px',
      }}
    >
      <li style={{ display: 'flex' }}>
        {/* Apply display: inline-block */}
        <p style={{ marginRight: '20px' }}>{filteredContact.name}:</p>
        <p style={{ marginRight: '20px' }}>{filteredContact.number}</p>
        <Button onClick={handleDelete} colorScheme="blue" size="sm">
          {/* Set colorScheme to "blue" */}
          Delete
        </Button>
      </li>
    </ul>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};
