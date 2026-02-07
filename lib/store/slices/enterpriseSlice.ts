import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import enterpriseService from "../../services/enterpriseService";
import type {
  CreateOrUpdateBusinessInfoPayload,
  ListOfValue,
} from "../../services/enterpriseService";

const initialState = {
  isSubmitting: false,
  isSubmitted: false,
  isLoadingIndustries: false,
  industries: [] as ListOfValue[],
  error: null as string | null,
  industriesError: null as string | null,
};

export const createOrUpdateBusinessInfo = createAsyncThunk(
  "enterprise/createOrUpdateBusinessInfo",
  async (data: CreateOrUpdateBusinessInfoPayload, { rejectWithValue }) => {
    try {
      const response = await enterpriseService.createOrUpdateBusinessInfoService(data);
      return response;
    } catch (e: unknown) {
      const errorData = (e instanceof Error ? e.message : null) || "Failed to submit business info";
      return rejectWithValue(errorData);
    }
  }
);

export const getAllListOfValues = createAsyncThunk(
  "enterprise/getAllListOfValues",
  async (_, { rejectWithValue }) => {
    try {
      const response = await enterpriseService.getAllListOfValuesService();
      return response;
    } catch (e: unknown) {
      const errorData = (e instanceof Error ? e.message : null) || "Failed to load industries";
      return rejectWithValue(errorData);
    }
  }
);

const enterpriseSlice = createSlice({
  name: "enterprise",
  initialState: initialState,
  reducers: {
    clearEnterpriseError: (state) => {
      state.error = null;
    },
    resetEnterpriseForm: (state) => {
      state.isSubmitted = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create or Update Business Info
      .addCase(createOrUpdateBusinessInfo.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(createOrUpdateBusinessInfo.fulfilled, (state) => {
        state.isSubmitting = false;
        state.isSubmitted = true;
        state.error = null;
      })
      .addCase(createOrUpdateBusinessInfo.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload as string;
      })
      // Get All List Of Values
      .addCase(getAllListOfValues.pending, (state) => {
        state.isLoadingIndustries = true;
        state.industriesError = null;
      })
      .addCase(getAllListOfValues.fulfilled, (state, action) => {
        state.isLoadingIndustries = false;
        // Filter for BusinessInfo and active items
        const filtered = action.payload.filter(
          (item: ListOfValue) => item.lov_Name === "BusinessInfo" && item.isActive
        );
        state.industries = filtered;
        state.industriesError = null;
      })
      .addCase(getAllListOfValues.rejected, (state, action) => {
        state.isLoadingIndustries = false;
        state.industriesError = action.payload as string;
      });
  },
});

export const { clearEnterpriseError, resetEnterpriseForm } = enterpriseSlice.actions;
export default enterpriseSlice.reducer;
