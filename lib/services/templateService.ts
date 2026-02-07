import axiosInstance from "./config/axiosConfig";
import { ENDPOINTS } from "./endPoints/endPoint";

const ENDPOINTS_TEMPLATE = ENDPOINTS.TEMPLATE_MASTER;

export interface Template {
  template_Id: number;
  template_Name: string;
  template_Type: number;
  template_TypeName: string;
  room_Type: number;
  room_TypeName: string;
  template_Style: number;
  template_StyleName: string | null;
  template_Url: string;
  thumbnail_Url: string;
  access_Type: string;
  description: string;
  isActive?: boolean; // Optional - API may not always return this field
  userId: number;
  isApproved: boolean;
  createdBy: string;
  createdOn: string;
  updatedBy: string | null;
  updatedOn: string | null;
  multiple_ThumbnailUrls?: string[]; // Array of additional thumbnail URLs
  isCustomer?: boolean; // Optional field
  viewCount?: number; // Optional template view count
  likeCount?: number; // Optional template like count
}

export const getAllTemplatesService = async (): Promise<Template[]> => {
  try {
    const response = await axiosInstance.get(ENDPOINTS_TEMPLATE.GET_ALL);
    return response.data;
  } catch (error) {
    console.error("Failed to get templates:", error);
    throw error;
  }
};

export const likeTemplateService = async (
  templateId: number,
  userId: number,
  likes: boolean,
  isActive: boolean,
  moduleName: string = "Template",
  activity: string = "Like"
): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(ENDPOINTS_TEMPLATE.LIKE, {
      templateId,
      userId,
      likes,
      isActive,
      moduleName,
      activity
    });
    return response.data;
  } catch (error) {
    console.error("Failed to like template:", error);
    throw error;
  }
};

export const addCommentService = async (templateId: number, userId: number, comment: string): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(ENDPOINTS_TEMPLATE.COMMENT, { templateId, userId, comment });
    return response.data;
  } catch (error) {
    console.error("Failed to add comment:", error);
    throw error;
  }
};

export const favoriteTemplateService = async (
  templateId: number,
  userId: number,
  isActive: boolean,
  moduleName: string = "Template",
  activity: string = "Favorite"
): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(ENDPOINTS_TEMPLATE.FAVORITE, {
      templateId,
      userId,
      isActive,
      moduleName,
      activity
    });
    return response.data;
  } catch (error) {
    console.error("Failed to favorite template:", error);
    throw error;
  }
};

export const addTemplateViewService = async (
  templateId: number,
  moduleName: string = "Template",
  activity: string = "View"
): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(ENDPOINTS_TEMPLATE.ADD_VIEW, {
      templateId,
      moduleName,
      activity,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to add template view:", error);
    throw error;
  }
};

export const getUserTemplateInteractionsService = async (userId: number, templateId: number): Promise<unknown> => {
  try {
    const response = await axiosInstance.get(ENDPOINTS_TEMPLATE.GET_USER_INTERACTIONS, {
      params: { UserId: userId, TemplateId: templateId }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get user template interactions:", error);
    throw error;
  }
};

const templateService = {
  getAllTemplatesService,
  likeTemplateService,
  addCommentService,
  favoriteTemplateService,
  addTemplateViewService,
  getUserTemplateInteractionsService,
};

export default templateService;
