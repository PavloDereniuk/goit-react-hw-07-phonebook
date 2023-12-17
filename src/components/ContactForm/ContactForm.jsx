import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { addContact, getContacts } from '../../redux/contactsSlice';
import {
  ErrorMessage,
  Field,
  Form,
  FormGroup,
  Container,
} from './ContactForm.styled';

const contactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required!'),
  number: Yup.string()
    .min(8, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = values => {
    const name = values.name;
    const number = values.number;
    const isOnContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isOnContacts
      ? alert(`${name} already in phonebook!`)
      : dispatch(addContact(name, number));
  };

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactsSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          handleSubmit(values);
        }}
      >
        <Form>
          <FormGroup htmlFor="name">
            Name
            <Field name="name" placeholder="" value={contacts.name} />
            <ErrorMessage name="name" component="span" />
          </FormGroup>

          <FormGroup htmlFor="number">
            Number
            <Field name="number" placeholder="" value={contacts.number} />
            <ErrorMessage name="number" component="span" />
          </FormGroup>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </Container>
  );
};