import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from '../redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../redux/selectors';
import { Loader } from './Loader';
import { Container } from './General.styled';

export const App = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      {isLoading && !error && <Loader />}
      {error && <p >Sorry, something went wrong. Please try to reload this page.</p>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {visibleContacts.length > 0 && !error ? <ContactList /> : <p >Your phonebook is empty.</p>}
    </Container>
  );
};
