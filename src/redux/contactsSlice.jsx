import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledGet = (state, action) => {
  state.items = action.payload;
  handleFulfilled(state);
};

const handleFulfilledAdd = (state, action) => {
  state.items.push(action.payload);
  handleFulfilled(state);
};

const handleFulfilledDelete = (state, action) => {
  state.items = state.items.filter(({ id }) => id !== action.payload.id);
  handleFulfilled(state);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});
