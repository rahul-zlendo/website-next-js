import axiosInstance from "./config/axiosConfig";
import { ENDPOINTS } from "./endPoints/endPoint";

const ENDPOINTS_BUSINESS_INFO = ENDPOINTS.BUSINESS_INFO;
const ENDPOINTS_LIST_OF_VALUES = ENDPOINTS.LIST_OF_VALUES;

export interface CreateOrUpdateBusinessInfoPayload {
  Id: number;
  FullName: string;
  EmailAddress: string;
  CompanyName: string;
  PhoneNumber: string;
  State: string | null;
  Country: string | null;
  BusinessStatus: number;
  BusinessDescription: number;
  BusinessChallenge: string;
  IsActive: boolean;
  ScheduleDate: string | null;
  ScheduleTime: string | null;
  RescheduleDate: string | null;
  RescheduleTime: string | null;
  Remarks: string;
  AssignedTo: number;
  ModuleName: string;
  Activity: string;
}

export interface ListOfValue {
  lov_Key: string;
  description: string;
  lov_Value: number;
  lov_Name?: string;
  isActive?: boolean;
}

export const createOrUpdateBusinessInfoService = async (
  data: CreateOrUpdateBusinessInfoPayload
): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(
      ENDPOINTS_BUSINESS_INFO.CREATE_OR_UPDATE,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Failed to create or update business info:", error);
    throw error;
  }
};

export const getAllListOfValuesService = async (): Promise<ListOfValue[]> => {
  try {
    const response = await axiosInstance.get(ENDPOINTS_LIST_OF_VALUES.GET_ALL);
    return response.data;
  } catch (error) {
    console.error("Failed to get list of values:", error);
    throw error;
  }
};

const enterpriseService = {
  createOrUpdateBusinessInfoService,
  getAllListOfValuesService,
};

export default enterpriseService;
