import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteContactApi,
  getContactsApi,
  postContactApi,
} from "../components/Api/contacts-api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await getContactsApi();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, thunkAPI) => {
    try {
      return await postContactApi(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      return await deleteContactApi(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
