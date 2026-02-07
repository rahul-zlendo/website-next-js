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
}

export const getAllOffersService = async (): Promise<Offer[]> => {
  try {
    const response = await axiosInstance.get(ENDPOINTS_OFFERS.GET_ALL);
    return response.data;
  } catch (error) {
    console.error("Failed to get offers:", error);
    throw error;
  }
};

const offerService = {
  getAllOffersService,
};

export default offerService;
