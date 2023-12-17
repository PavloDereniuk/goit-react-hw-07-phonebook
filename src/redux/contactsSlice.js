import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

export const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        return state.filter(contact => contact.id !== action.payload);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts;