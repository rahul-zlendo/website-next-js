import axiosInstance from "./config/axiosConfig";
import { ENDPOINTS } from "./endPoints/endPoint";

const ENDPOINTS_CONTACT = ENDPOINTS.BUSINESS_CONTACT;

export interface CreateBusinessContactPayload {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
  isActive: boolean;
  createdBy: string;
  createdOn: string;
  updatedBy: string;
  updatedOn: string;
  moduleName: string;
  activity: string;
}

export const createBusinessContactService = async (
  data: CreateBusinessContactPayload
): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(
      ENDPOINTS_CONTACT.CREATE,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Failed to create business contact:", error);
    throw error;
  }
};

const contactService = {
  createBusinessContactService,
};

export default contactService;
