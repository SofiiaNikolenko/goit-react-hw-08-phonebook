import ContactForm from '../../components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/operations';
import ContactList from '../../components/ContactList/ContactList';
import { isLoadingSelector } from 'redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import Filter from '../../components/Filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.token);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    if (auth) {
      dispatch(fetchContactsThunk());
    }
  }, [auth, dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Phonebook</h1>
          <ContactForm />
          <Filter />
          <h2>Contacts</h2>
          <ContactList />
        </>
      )}
    </>
  );
};

export default Contacts;
