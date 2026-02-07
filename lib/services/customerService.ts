import { axiosInstance } from './config/axiosConfig';

export const customerService = {
    getCustomerById: async (id: number) => {
        try {
            const response = await axiosInstance.get(`/Customer/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};
