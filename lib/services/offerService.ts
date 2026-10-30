import axiosInstance from "./config/axiosConfig";
import { ENDPOINTS } from "./endPoints/endPoint";

const ENDPOINTS_OFFERS = ENDPOINTS.OFFERS;

export interface Offer {
  offerId: number;
  offerName: string;
  offerType: string;
  discountValue: number;
  validFrom: string;
  validTo: string;
  status: string;
  countryId: number;
  countryName: string;
  stateId: number;
  stateName: string;
  locationId: number;
  locationName: string;
  autoApply: boolean;
  isActive: boolean;
  createdBy: string | null;
  createdOn: string;
  updatedBy: string | null;
  updatedOn: string | null;
  symbol: string;
}

export const getAllOffersService = async (): Promise<Offer[]> => {
  try {
    const response = await axiosInstance.get(ENDPOINTS_OFFERS.GET_ALL);
    return response.data;
  } catch {
    // Offers are non-critical — if the API is unavailable, return empty array
    // so the PromoBanner simply stays hidden without polluting the console.
    return [];
  }
};

const offerService = {
  getAllOffersService,
};

export default offerService;
