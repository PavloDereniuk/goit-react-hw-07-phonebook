import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/selectors';
import {
  List,
  Item,
  Wrapper,
  AccentText,
  Text,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  if (!contacts.length) return null;

  return (
    <List>
      {contacts.map(contact => (
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