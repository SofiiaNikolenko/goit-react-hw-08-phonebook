import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = event => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {name}: {number}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};