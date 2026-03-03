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
  isLoadingUserTypes: false,
  industries: [] as ListOfValue[],
  userTypes: [] as ListOfValue[],
  error: null as string | null,
  industriesError: null as string | null,
  userTypesError: null as string | null,
};

export const createOrUpdateBusinessInfo = createAsyncThunk<any, any, { rejectValue: string }>(
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

export const getAllListOfValues = createAsyncThunk<any, void, { rejectValue: string }>(
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
        state.isLoadingUserTypes = true;
        state.industriesError = null;
        state.userTypesError = null;
      })
      .addCase(getAllListOfValues.fulfilled, (state, action: any) => {
        state.isLoadingIndustries = false;
        state.isLoadingUserTypes = false;

        const payload = action.payload;
        const dataArray = Array.isArray(payload)
          ? payload
          : (payload?.data || payload?.list || payload?.item || []);

        if (!Array.isArray(dataArray)) {
          state.error = "Invalid data format from API";
          return;
        }

        // Filter for BusinessInfo (Industries) - only active items
        state.industries = dataArray.filter(
          (item: any) => {
            const rawName = item.lov_Name || item.lov_name || item.lovName || item.LOV_Name || "";
            const name = String(rawName).toLowerCase().trim().replace(/[^a-z0-9]/g, '');
            const active = item.isActive ?? item.IsActive ?? item.is_active ?? true;
            return name === "businessinfo" && active === true;
          }
        ) as ListOfValue[];

        // Filter for CustomerType (User Types) - only active items
        state.userTypes = dataArray.filter(
          (item: any) => {
            const rawName = item.lov_Name || item.lov_name || item.lovName || item.LOV_Name || "";
            const name = String(rawName).toLowerCase().trim().replace(/[^a-z0-9]/g, '');
            const active = item.isActive ?? item.IsActive ?? item.is_active ?? true;
            return name === "customertype" && active === true;
          }
        ) as ListOfValue[];

        console.log("Filtered Industries (BusinessInfo):", state.industries);
        console.log("Filtered UserTypes (CustomerType):", state.userTypes);

        state.industriesError = null;
        state.userTypesError = null;
      })
      .addCase(getAllListOfValues.rejected, (state, action) => {
        state.isLoadingIndustries = false;
        state.isLoadingUserTypes = false;
        state.industriesError = action.payload as string;
        state.userTypesError = action.payload as string;
      });
  },
});

export const { clearEnterpriseError, resetEnterpriseForm } = enterpriseSlice.actions;
export default enterpriseSlice.reducer;
