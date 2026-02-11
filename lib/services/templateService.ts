import axiosInstance from "./config/axiosConfig";
import { ENDPOINTS } from "./endPoints/endPoint";

const ENDPOINTS_TEMPLATE = ENDPOINTS.TEMPLATE_MASTER;

export interface Template {
  template_Id: number;
  template_Name: string;
  template_Type: number;
  template_TypeName: string;
  room_Type: number;
  room_TypeName: string | null;
  template_Style: number;
  template_StyleName: string | null;
  template_Url: string;
  thumbnail_Url: string;
  access_Type: string;
  description: string | null;
  isActive?: boolean; // Optional - API may not always return this field
  userId: number;
  userName?: string; // From GetCommunityTemplate
  profileUrl?: string | null; // From GetCommunityTemplate
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

export interface TemplateComment {
  templateCommentId: number;
  templateId: number;
  templateName: string;
  parentCommentId: number | null;
  userId: number;
  userName: string;
  profileUrl: string;
  text: string;
  totalLikes: number;
  isLikedByLoggedUser: boolean;
  createdOn: string;
  replies: TemplateComment[];
}

export interface TemplateCommentsResponse {
  comments: TemplateComment[];
  totalCommentLikes: number;
}

export const getAllTemplatesService = async (): Promise<Template[]> => {
  try {
    // Fetch both endpoints in parallel
    const [allTemplatesResponse, communityTemplatesResponse] = await Promise.all([
      axiosInstance.get(ENDPOINTS_TEMPLATE.GET_ALL),
      axiosInstance.get(ENDPOINTS_TEMPLATE.GET_COMMUNITY).catch(() => ({ data: [] })) // Fallback to empty array if fails
    ]);

    const allTemplates: Template[] = allTemplatesResponse.data;
    const communityTemplates: Template[] = communityTemplatesResponse.data;

    // Create a map of community templates by template_Id for quick lookup
    const communityMap = new Map<number, Template>();
    communityTemplates.forEach((template) => {
      communityMap.set(template.template_Id, template);
    });

    // Merge data: if template exists in community, use userId, userName, profileUrl from there
    const mergedTemplates = allTemplates.map((template) => {
      const communityData = communityMap.get(template.template_Id);
      if (communityData) {
        return {
          ...template,
          userId: communityData.userId,
          userName: communityData.userName,
          profileUrl: communityData.profileUrl,
        };
      }
      return template;
    });

    return mergedTemplates;
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

export const addCommentService = async (templateId: number, userId: number, text: string, parentCommentId: number | null = null): Promise<unknown> => {
  try {
    const payload = { 
      templateId, 
      userId, 
      parentCommentId: parentCommentId ?? null,
      text
    };
    const response = await axiosInstance.post(ENDPOINTS_TEMPLATE.ADD_COMMENT, payload);
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

export const getTemplateCommentsService = async (templateId: number): Promise<TemplateCommentsResponse> => {
  try {
    const response = await axiosInstance.get(ENDPOINTS_TEMPLATE.GET_COMMENTS, {
      params: { templateId }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get template comments:", error);
    throw error;
  }
};

export const likeCommentService = async (templateCommentId: number, userId: number): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(ENDPOINTS_TEMPLATE.ADD_COMMENT_LIKE, {
      templateCommentId,
      userId
    });
    return response.data;
  } catch (error) {
    console.error("Failed to like comment:", error);
    throw error;
  }
};

export const deleteCommentService = async (templateCommentId: number, userId: number): Promise<unknown> => {
  try {
    const response = await axiosInstance.post(ENDPOINTS_TEMPLATE.DELETE_COMMENT, {
      templateCommentId,
      userId
    });
    return response.data;
  } catch (error) {
    console.error("Failed to delete comment:", error);
    throw error;
  }
};

const templateService = {
  getAllTemplatesService,
  likeTemplateService,
  addCommentService,
  getTemplateCommentsService,
  likeCommentService,
  deleteCommentService,
  favoriteTemplateService,
  addTemplateViewService,
  getUserTemplateInteractionsService,
};

export default templateService;
