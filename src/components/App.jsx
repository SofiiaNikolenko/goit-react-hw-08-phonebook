import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { errorSelector } from '../redux/selectors';

function App() {
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error ? (
        <>
          <p>Sorry, something went wrong.</p>
          <p>{error}</p>
        </>
      ) : (
        <>
          <h1>Phonebook</h1>
          <ContactForm />
          <h1>Contacts</h1>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
}

export default App;
