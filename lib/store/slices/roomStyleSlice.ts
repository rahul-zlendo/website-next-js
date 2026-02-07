import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import roomStyleService from "../../services/roomStyleService";
import type { RoomStyle } from "../../services/roomStyleService";

const initialState = {
  isLoading: false,
  roomStyles: [] as RoomStyle[],
  activeRoomStyles: [] as RoomStyle[],
  error: null as string | null,
};

export const getAllRoomStyles = createAsyncThunk(
  "roomStyles/getAllRoomStyles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await roomStyleService.getAllRoomStylesService();
      return response;
    } catch (e: unknown) {
      const errorData = (e instanceof Error ? e.message : null) || "Failed to load room styles";
      return rejectWithValue(errorData);
    }
  }
);

const roomStyleSlice = createSlice({
  name: "roomStyle",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRoomStyles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllRoomStyles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.roomStyles = action.payload;
        state.activeRoomStyles = action.payload.filter((style) => style.isActive);
        state.error = null;
      })
      .addCase(getAllRoomStyles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default roomStyleSlice.reducer;
