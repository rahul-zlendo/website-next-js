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

export const getAllOffers = createAsyncThunk<any, void, { state: any }>(
  "offers/getAllOffers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await offerService.getAllOffersService();
      const countryId = getState().enterprise.detectedCountryId;
      return { offers: response, countryId };
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
        const { offers, countryId } = action.payload;
        state.offers = offers;

        // Filter for active offers
        let activeOffers = offers.filter(
          (offer: Offer) => offer.isActive === true
        );
        console.log(countryId, "countryId");

        // If we have a detected countryId, further filter offers for that country
        // If we have a detected countryId, further filter offers for that country
        if (countryId && countryId !== null) {
          activeOffers = activeOffers.filter(
            (offer: Offer) => offer.countryId === countryId
          );
        } else {
          // If no countryId is available, we don't show any offers
          activeOffers = [];
        }

        if (activeOffers.length === 0) {
          state.activeOffer = null;
          state.error = null;
          return;
        }

        // First, try to find an offer that is both active AND within date range
        const validOffer = activeOffers.find((offer: Offer) => isOfferValid(offer));
        console.log(validOffer, "validOffer");

        // If no offer is within date range, use the first active offer anyway
        const selectedOffer = validOffer || activeOffers[0];

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
