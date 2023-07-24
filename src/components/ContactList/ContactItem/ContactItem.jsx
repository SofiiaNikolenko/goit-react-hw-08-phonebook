import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../../redux/contacts/operations';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = event => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <span className={css.contactName}>{name}:</span>{' '}
        <span className={css.contactNumber}>{number}</span>
      </div>
      <button className={css.deleteBtn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
};
