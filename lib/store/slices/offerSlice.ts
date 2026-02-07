import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import offerService from "../../services/offerService";
import type { Offer } from "../../services/offerService";

const initialState = {
  isLoading: false,
  offers: [] as Offer[],
  activeOffer: null as Offer | null,
  error: null as string | null,
};

// Helper function to check if offer is currently valid
const isOfferValid = (offer: Offer): boolean => {
  // Check if offer is active (isActive is true or undefined/null)
  if (offer.isActive === false) return false;
  
  // If dates are not provided, consider it valid
  if (!offer.validFrom || !offer.validTo) {
    return true;
  }
  
  try {
    const now = new Date();
    const validFrom = new Date(offer.validFrom);
    const validTo = new Date(offer.validTo);
    
    return now >= validFrom && now <= validTo;
  } catch (error) {
    console.error('Error parsing offer dates:', error, offer);
    // If date parsing fails, consider it valid
    return true;
  }
};

export const getAllOffers = createAsyncThunk(
  "offers/getAllOffers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await offerService.getAllOffersService();
      return response;
    } catch (e: unknown) {
      const errorData = (e instanceof Error ? e.message : null) || "Failed to load offers";
      return rejectWithValue(errorData);
    }
  }
);

const offerSlice = createSlice({
  name: "offer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllOffers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offers = action.payload;
        
        console.log('Offers fetched:', action.payload);
        
        // Filter for active offers where isActive === true
        const activeOffers = action.payload.filter(
          (offer: Offer) => offer.isActive === true
        );
        
        console.log('Active offers (isActive === true):', activeOffers);
        
        if (activeOffers.length === 0) {
          console.log('No active offers found');
          state.activeOffer = null;
          state.error = null;
          return;
        }
        
        // First, try to find an offer that is both active AND within date range
        const validOffer = activeOffers.find((offer: Offer) => isOfferValid(offer));
        
        // If no offer is within date range, use the first active offer anyway
        const selectedOffer = validOffer || activeOffers[0];
        
        console.log('Selected offer:', selectedOffer);
        console.log('Is within date range:', validOffer ? true : false);
        
        state.activeOffer = selectedOffer;
        state.error = null;
      })
      .addCase(getAllOffers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default offerSlice.reducer;
