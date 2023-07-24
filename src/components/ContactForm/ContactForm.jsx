import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/contacts/operations';
import { contactsSelector } from '../../redux/contacts/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = formValues;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContactThunk({ name, number: phone.toString() }));
    setFormValues({ name: '', phone: '' });
  };

  return (
    <form
      className={css.contactForm}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
