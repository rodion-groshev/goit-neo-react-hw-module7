import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.loading = false;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export default slice.reducer;
