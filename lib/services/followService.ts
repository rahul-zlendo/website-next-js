import axiosInstance from "./config/axiosConfig";
import { ENDPOINTS } from "./endPoints/endPoint";

const ENDPOINTS_FOLLOW = ENDPOINTS.FOLLOW;

export interface FollowUserPayload {
  followerUserId: number;
  followingUserId: number;
  isActive: boolean;
}

export interface FollowDataResponse {
  userId: number;
  followingCount: number;
  followerCount: number;
}

export const followOrUnfollowUserService = async (payload: FollowUserPayload): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(ENDPOINTS_FOLLOW.FOLLOW_OR_UNFOLLOW, payload);
    return response.data;
  } catch (error) {
    console.error("Failed to follow/unfollow user:", error);
    throw error;
  }
};

export const getFollowByUserIdService = async (userId: number): Promise<FollowDataResponse> => {
  try {
    const response = await axiosInstance.get(ENDPOINTS_FOLLOW.GET_FOLLOW_BY_USER_ID, {
      params: { UserId: userId }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get follow data:", error);
    throw error;
  }
};
