import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import templateService from "../../services/templateService";
import type { Template } from "../../services/templateService";
 
const initialState = {
  isLoading: false,
  templates: [] as Template[],
  activeTemplates: [] as Template[],
  error: null as string | null,
};
 
export const getAllTemplates = createAsyncThunk(
  "/TemplateMaster/GetAllActiveTemplate",
  async (_, { rejectWithValue }) => {
    try {
      const response = await templateService.getAllTemplatesService();
      return response;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue("Failed to load templates");
    }
  }
);
 
 
const templateSlice = createSlice({
  name: "template",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTemplates.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllTemplates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.templates = action.payload;
       
        // Filter for active templates only (isActive === true or undefined/missing)
        // If isActive is not provided, treat it as active by default
        const activeTemplates = action.payload.filter(
          (template: Template) => template.isActive !== false
        );
       
 
       
        state.activeTemplates = activeTemplates;
        state.error = null;
      })
      .addCase(getAllTemplates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});
 
export default templateSlice.reducer;
 
 