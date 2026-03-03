import axiosInstance from "./config/axiosConfig";
import { ENDPOINTS } from "./endPoints/endPoint";

const ENDPOINTS_FORM = ENDPOINTS.FORM;

export interface PartnershipFormPayload {
    fullName: string;
    emailId: string;
    mobileNumber: number;
    industryType: number;
    comments: string;
    isActive: boolean;
}

export interface TrainingFormPayload {
    fullName: string;
    emailId: string;
    mobileNumber: number;
    industryType: number;
    userType: number;
    isActive: boolean;
}

export interface ResourceFormPayload {
    fullName: string;
    emailId: string;
    mobileNumber: number;
    industryType: number;
    userType: number;
    isActive: boolean;
}

export interface VastuFormPayload {
    fullName: string;
    emailId: string;
    mobileNumber: number;
    userType: number;
    comments: string;
    floorPlan?: File;
    isActive: boolean;
}

export const createPartnershipFormService = async (
    data: PartnershipFormPayload
): Promise<unknown> => {
    try {
        const response = await axiosInstance.post(
            ENDPOINTS_FORM.PARTNERSHIP_CREATE,
            data
        );
        return response.data;
    } catch (error) {
        console.error("Failed to create partnership form:", error);
        throw error;
    }
};

export const createTrainingFormService = async (
    data: TrainingFormPayload
): Promise<unknown> => {
    try {
        const response = await axiosInstance.post(
            ENDPOINTS_FORM.TRAINING_CREATE,
            data
        );
        return response.data;
    } catch (error) {
        console.error("Failed to create training form:", error);
        throw error;
    }
};

export const createResourceFormService = async (
    data: ResourceFormPayload
): Promise<unknown> => {
    try {
        const response = await axiosInstance.post(
            ENDPOINTS_FORM.RESOURCE_DOWNLOAD_CREATE,
            data
        );
        return response.data;
    } catch (error) {
        console.error("Failed to create resource form:", error);
        throw error;
    }
};

export const createVastuFormService = async (
    data: VastuFormPayload
): Promise<unknown> => {
    try {
        const formData = new FormData();
        formData.append('fullName', data.fullName);
        formData.append('emailId', data.emailId);
        formData.append('mobileNumber', data.mobileNumber.toString());
        formData.append('userType', data.userType.toString());
        formData.append('comments', data.comments);
        formData.append('isActive', data.isActive.toString());
        if (data.floorPlan) {
            formData.append('floorPlan', data.floorPlan);
        }

        const response = await axiosInstance.post(
            ENDPOINTS_FORM.VASTU_CREATE,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Failed to create vastu form:", error);
        throw error;
    }
};

const formService = {
    createPartnershipFormService,
    createTrainingFormService,
    createResourceFormService,
    createVastuFormService,
};

export default formService;
