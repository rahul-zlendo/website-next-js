import axiosInstance from "./config/axiosConfig";
import { ENDPOINTS } from "./endPoints/endPoint";

const ENDPOINTS_ROOM_MASTER = ENDPOINTS.ROOM_MASTER;

export interface RoomStyle {
  roomStyleId: number;
  roomStyleName: string;
  isActive: boolean;
  createdBy: string;
  createdOn: string;
  updatedBy: string;
  updatedOn: string;
}

export const getAllRoomStylesService = async (): Promise<RoomStyle[]> => {
  try {
    const response = await axiosInstance.get(ENDPOINTS_ROOM_MASTER.GET_ALL_ROOM_STYLES);
    return response.data;
  } catch (error) {
    console.error("Failed to get all room styles:", error);
    throw error;
  }
};

const roomStyleService = {
  getAllRoomStylesService,
};

export default roomStyleService;
