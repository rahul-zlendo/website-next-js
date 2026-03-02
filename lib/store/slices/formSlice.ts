import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import formService from "../../services/formService";
import type { PartnershipFormPayload, TrainingFormPayload, ResourceFormPayload } from "../../services/formService";

const initialState = {
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null,
};

export const createPartnershipForm = createAsyncThunk(
    "form/createPartnershipForm",
    async (data: PartnershipFormPayload, { rejectWithValue }) => {
        try {
            const response = await formService.createPartnershipFormService(data);
            return response;
        } catch (e: unknown) {
            const errorData = (e instanceof Error ? e.message : null) || "Failed to submit partnership form";
            return rejectWithValue(errorData);
        }
    }
);

export const createTrainingForm = createAsyncThunk(
    "form/createTrainingForm",
    async (data: TrainingFormPayload, { rejectWithValue }) => {
        try {
            const response = await formService.createTrainingFormService(data);
            return response;
        } catch (e: unknown) {
            const errorData = (e instanceof Error ? e.message : null) || "Failed to submit training form";
            return rejectWithValue(errorData);
        }
    }
);

export const createResourceForm = createAsyncThunk(
    "form/createResourceForm",
    async (data: ResourceFormPayload, { rejectWithValue }) => {
        try {
            const response = await formService.createResourceFormService(data);
            return response;
        } catch (e: unknown) {
            const errorData = (e instanceof Error ? e.message : null) || "Failed to submit resource form";
            return rejectWithValue(errorData);
        }
    }
);

const formSlice = createSlice({
    name: "form",
    initialState: initialState,
    reducers: {
        resetFormStatus: (state) => {
            state.isSubmitting = false;
            state.isSubmitted = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Partnership Form
            .addCase(createPartnershipForm.pending, (state) => {
                state.isSubmitting = true;
                state.error = null;
            })
            .addCase(createPartnershipForm.fulfilled, (state) => {
                state.isSubmitting = false;
                state.isSubmitted = true;
                state.error = null;
            })
            .addCase(createPartnershipForm.rejected, (state, action) => {
                state.isSubmitting = false;
                state.error = action.payload as string;
            })
            // Training Form
            .addCase(createTrainingForm.pending, (state) => {
                state.isSubmitting = true;
                state.error = null;
            })
            .addCase(createTrainingForm.fulfilled, (state) => {
                state.isSubmitting = false;
                state.isSubmitted = true;
                state.error = null;
            })
            .addCase(createTrainingForm.rejected, (state, action) => {
                state.isSubmitting = false;
                state.error = action.payload as string;
            })
            // Resource Form
            .addCase(createResourceForm.pending, (state) => {
                state.isSubmitting = true;
                state.error = null;
            })
            .addCase(createResourceForm.fulfilled, (state) => {
                state.isSubmitting = false;
                state.isSubmitted = true;
                state.error = null;
            })
            .addCase(createResourceForm.rejected, (state, action) => {
                state.isSubmitting = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetFormStatus } = formSlice.actions;
export default formSlice.reducer;
