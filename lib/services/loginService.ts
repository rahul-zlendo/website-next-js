import axiosInstance from "./config/axiosConfig";
import { ENDPOINTS } from "./endPoints/endPoint";

const ENDPOINTS_LOGIN = ENDPOINTS.LOGIN;

export interface UserDetailsResponse {
  userId: number;
  userName: string;
  emailId: string;
  phoneNumber: string;
  profileUrl: string | null;
  customerType: string;
  accountType: string;
  [key: string]: unknown;
}

export const getUserDetailsByTokenService = async (userToken: string): Promise<UserDetailsResponse> => {
  try {
    // Clean the token to remove any extra quotes or whitespace
    let cleanedToken = userToken.trim();
    // Remove surrounding quotes if present
    if ((cleanedToken.startsWith('"') && cleanedToken.endsWith('"')) || 
        (cleanedToken.startsWith("'") && cleanedToken.endsWith("'"))) {
      cleanedToken = cleanedToken.slice(1, -1);
    }
    // Remove escaped quotes
    cleanedToken = cleanedToken.replace(/\\"/g, '"').replace(/\\'/g, "'").trim();
    
    console.log('Original token:', userToken, 'Cleaned token:', cleanedToken);
    
    const response = await axiosInstance.post(ENDPOINTS_LOGIN.GET_USER_DETAILS_BY_TOKEN, {
      userToken: cleanedToken
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get user details by token:", error);
    throw error;
  }
};
