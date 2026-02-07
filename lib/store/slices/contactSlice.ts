import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactService from "../../services/contactService";
import type { CreateBusinessContactPayload } from "../../services/contactService";

const initialState = {
  isSubmitting: false,
  isSubmitted: false,
  error: null as string | null,
};

export const createBusinessContact = createAsyncThunk(
  "contact/createBusinessContact",
  async (data: CreateBusinessContactPayload, { rejectWithValue }) => {
    try {
      const response = await contactService.createBusinessContactService(data);
      return response;
    } catch (e: unknown) {
      const errorData = (e instanceof Error ? e.message : null) || "Failed to submit contact form";
      return rejectWithValue(errorData);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    clearContactError: (state) => {
      state.error = null;
    },
    resetContactForm: (state) => {
      state.isSubmitted = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBusinessContact.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(createBusinessContact.fulfilled, (state) => {
        state.isSubmitting = false;
        state.isSubmitted = true;
        state.error = null;
      })
      .addCase(createBusinessContact.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearContactError, resetContactForm } = contactSlice.actions;
export default contactSlice.reducer;
