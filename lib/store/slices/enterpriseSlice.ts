import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import enterpriseService from "../../services/enterpriseService";
import type {
  CreateOrUpdateBusinessInfoPayload,
  ListOfValue,
  Location,
  Region,
} from "../../services/enterpriseService";

const initialState = {
  isSubmitting: false,
  isSubmitted: false,
  isLoadingIndustries: false,
  isLoadingUserTypes: false,
  industries: [] as ListOfValue[],
  userTypes: [] as ListOfValue[],
  Location_type: [] as ListOfValue[],
  locations: [] as Location[],
  isLoadingLocations: false,
  regions: [] as Region[],
  isLoadingRegions: false,
  detectedCountryId: null as number | null,
  isDetectingCountry: false,
  detectedRegionId: null as number | null,
  isDetectingRegion: false,
  error: null as string | null,
  industriesError: null as string | null,
  userTypesError: null as string | null,
  locationsError: null as string | null,
  regionsError: null as string | null,
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

export const getAllLocations = createAsyncThunk<any, void, { rejectValue: string }>(
  "enterprise/getAllLocations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await enterpriseService.getAllLocationsService();
      return response;
    } catch (e: unknown) {
      const errorData = (e instanceof Error ? e.message : null) || "Failed to load locations";
      return rejectWithValue(errorData);
    }
  }
);

export const getAllRegions = createAsyncThunk<any, void, { rejectValue: string }>(
  "enterprise/getAllRegions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await enterpriseService.getAllRegionsService();
      return response;
    } catch (e: unknown) {
      const errorData = (e instanceof Error ? e.message : null) || "Failed to load regions";
      return rejectWithValue(errorData);
    }
  }
);

export const detectUserCountry = createAsyncThunk<number | null, void, { state: any }>(
  "enterprise/detectUserCountry",
  async (_, { getState, dispatch }) => {
    try {
      // 1. If authenticated, only use user profile data (no third-party API call)
      const authState = getState().auth;
      if (authState.isAuthenticated) {
        return authState.user?.countryId || null;
      }

      // 2. If not authenticated, call third-party API for IP-based detection
      const ipResponse = await fetch("https://free.freeipapi.com/api/json/");
      const ipData = await ipResponse.json();
      const countryName = ipData?.countryName || "";
      const countryCode = ipData?.countryCode || "";

      // Note: Redirection is now handled by Middleware (server-side) for better performance.
      // We no longer perform window.location.href redirects here to avoid delays and loops.

      let locations = getState().enterprise.locations;
      if (locations.length === 0) {
        const result: any = await dispatch(getAllLocations()).unwrap();
        locations = Array.isArray(result) ? result : (result?.data || result?.list || []);
      }

      const matchedLocation = locations.find(
        (loc: any) => loc.location_Name.toLowerCase() === countryName.toLowerCase()
      );

      return matchedLocation ? matchedLocation.location_Id : null;
    } catch (e) {
      console.error("Failed to detect country or match location:", e);
      return null;
    }
  }
);

export const detectUserRegion = createAsyncThunk<number | null, void, { state: any }>(
  "enterprise/detectUserRegion",
  async (_, { getState, dispatch }) => {
    try {
      // 1. If authenticated, only use user profile data (no external API call)
      const authState = getState().auth;
      if (authState.isAuthenticated) {
        return authState.user?.regionId || null;
      }

      // 2. If not authenticated, identify region based on IP
      const ipResponse = await fetch("https://free.freeipapi.com/api/json/");
      const ipData = await ipResponse.json();
      const countryName = ipData.countryName;

      if (!countryName) return null;

      // 3. Get Regions
      let regions = getState().enterprise.regions;
      if (regions.length === 0) {
        const result: any = await dispatch(getAllRegions()).unwrap();
        regions = Array.isArray(result) ? result : (result?.data || result?.list || []);
      }

      // 4. Match countryName in region.countries
      const matchedRegion = regions.find((region: any) => 
        region.countries && region.countries.some((c: string) => c.toLowerCase() === countryName.toLowerCase())
      );

      return matchedRegion ? matchedRegion.regionId : null;
    } catch (e) {
      console.error("Failed to detect region:", e);
      return null;
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
        // Filter for Location_type - only active items
        state.Location_type = dataArray.filter(
          (item: any) => {
            const rawName = item.lov_Name || "";
            const name = String(rawName).toLowerCase().trim().replace(/[^a-z0-9]/g, '');
            const active = item.isActive ?? item.IsActive ?? item.is_active ?? true;
            return name === "Location Type" && active === true;
          }
        ) as ListOfValue[];

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
      })
      // Get All Locations
      .addCase(getAllLocations.pending, (state) => {
        state.isLoadingLocations = true;
        state.locationsError = null;
      })
      .addCase(getAllLocations.fulfilled, (state, action: any) => {
        state.isLoadingLocations = false;
        const payload = action.payload;
        const dataArray = Array.isArray(payload)
          ? payload
          : (payload?.data || payload?.list || payload?.item || []);
        
        state.locations = Array.isArray(dataArray) ? dataArray : [];
        state.locationsError = null;
      })
      .addCase(getAllLocations.rejected, (state, action) => {
        state.isLoadingLocations = false;
        state.locationsError = action.payload as string;
      })
      // Detect User Country
      .addCase(detectUserCountry.pending, (state) => {
        state.isDetectingCountry = true;
      })
      .addCase(detectUserCountry.fulfilled, (state, action) => {
        state.isDetectingCountry = false;
        state.detectedCountryId = action.payload;
      })
      .addCase(detectUserCountry.rejected, (state) => {
        state.isDetectingCountry = false;
        state.detectedCountryId = null;
      })
      // Get All Regions
      .addCase(getAllRegions.pending, (state) => {
        state.isLoadingRegions = true;
        state.regionsError = null;
      })
      .addCase(getAllRegions.fulfilled, (state, action: any) => {
        state.isLoadingRegions = false;
        const payload = action.payload;
        const dataArray = Array.isArray(payload)
          ? payload
          : (payload?.data || payload?.list || payload?.item || []);
        
        state.regions = Array.isArray(dataArray) ? dataArray : [];
        state.regionsError = null;
      })
      .addCase(getAllRegions.rejected, (state, action) => {
        state.isLoadingRegions = false;
        state.regionsError = action.payload as string;
      })
      // Detect User Region
      .addCase(detectUserRegion.pending, (state) => {
        state.isDetectingRegion = true;
      })
      .addCase(detectUserRegion.fulfilled, (state, action) => {
        state.isDetectingRegion = false;
        state.detectedRegionId = action.payload;
      })
      .addCase(detectUserRegion.rejected, (state) => {
        state.isDetectingRegion = false;
        state.detectedRegionId = null;
      });
  },
});

export const { clearEnterpriseError, resetEnterpriseForm } = enterpriseSlice.actions;
export default enterpriseSlice.reducer;
