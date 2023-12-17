import { useDispatch, useSelector } from 'react-redux';

import { getContacts, deleteContact } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';
import {
  List,
  Item,
  Wrapper,
  AccentText,
  Text,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact => {
    const hasContact = contact.name
      .toLowerCase()
      .includes(filter.toLowerCase());
    return hasContact;
  });

  if (!visibleContacts.length) return null;

  return (
    <List>
      {visibleContacts.map(contact => (
          <Item key={contact.id}>
            <Wrapper>
              <Text>
                <AccentText>Name: </AccentText>
                {contact.name}
              </Text>
              <Text>
                <AccentText>Number: </AccentText>
                {contact.number}
              </Text>
              <button onClick={() => dispatch(deleteContact(contact.id))}>
                Delete contact
              </button>
            </Wrapper>
          </Item>
        ))}
    </List>
  );
};