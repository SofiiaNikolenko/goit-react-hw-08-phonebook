import React from 'react';
import { ContactItem } from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { contactsSelector } from '../../redux/contacts/selectors';
import { filterSelector } from '../../redux/filter/selectors';
import css from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

  const currentContacts = contacts.filter(({ name }) =>
    name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <div className={css.contactList}>
      {contacts.length === 0 ? (
        <p className={css.noContacts}>No contacts available.</p>
      ) : (
        currentContacts.map(({ id, name, phone }) => {
          return (
            <ContactItem key={Number(id)} id={id} name={name} number={phone} />
          );
        })
      )}
    </div>
  );
}

export default ContactList;
