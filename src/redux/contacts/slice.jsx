import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  fetchContactsThunk,
  deleteContactThunk,
  changeContactThunk,
} from './operations';
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

const handleFulfilledChange = (state, action) => {
  state.items.map(item => {
    if (item.id !== action.payload.id) {
      return item;
    }
    item.name = action.payload.name;
    item.number = action.payload.number;
    return item;
  });
  handleFulfilled(state);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addCase(changeContactThunk.fulfilled, handleFulfilledChange)
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending,
          changeContactThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected,
          changeContactThunk.rejected
        ),
        handleRejected
      );
  },
});
