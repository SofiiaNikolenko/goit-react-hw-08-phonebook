import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { contactsSelector } from '../../redux/selectors';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [formErrors, setFormErrors] = useState({ name: '', phone: '' });
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    setFormErrors(prevFormErrors => ({ ...prevFormErrors, [name]: '' }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { name: newName, phone } = formData;

    if (contacts.some(({ name }) => newName === name)) {
      alert(`${newName} is already in contacts`);
      return;
    }

    dispatch(addContact({ name: newName, phone: phone.toString() }));

    setFormData({ name: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      {formErrors.name && <span>{formErrors.name}</span>}

      <label>
        Number
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      {formErrors.phone && <span>{formErrors.phone}</span>}
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
