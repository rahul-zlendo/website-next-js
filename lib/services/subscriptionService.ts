import { axiosInstance } from './config/axiosConfig';

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface Subscription {
  planId?: number;
  plan_Id?: number;
  planName?: string;
  subscriptionName?: string;
  title?: string;
  description?: string;
  price?: number | string;
  monthPrice?: number | string;
  monthlyPrice?: number | string;
  yearPrice?: number | string;
  yearlyPrice?: number | string;
  yearlyDiscountPercentage?: number;
  sub_month_discount_percentage?: number;
  period?: string;
  periodValue?: string;
  periodType?: string;
  periodId?: number | string;
  isActive?: boolean;
  countryName?: string;
  popular?: boolean;
  highlighted?: boolean;
  displayOrder?: number;
  offerId?: number;
  planTypeId?: number;
  planType?: string;
  mainFeatures?: {
    featureName: string;
    displayOrder?: number;
    subFeatures?: {
      featureName: string;
      displayOrder?: number;
    }[];
  }[];
  featureName?: string[];
  features?: any;
}

export interface CompareSubscriptionsResponse {
  [key: string]: any;
}

export const getAllSubscriptionsService = async (): Promise<Subscription[]> => {
  try {
    const response = await axiosInstance.get('/SubscriptionMaster/GetSubscriptionPlansWithFeatures');
    return response.data;
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    throw error;
  }
};

export const compareSubscriptionsService = async (): Promise<CompareSubscriptionsResponse> => {
  try {
    const response = await axiosInstance.get('/SubscriptionMaster/CompareSubscriptions');
    return response.data;
  } catch (error) {
    console.error('Error fetching compare subscriptions:', error);
    throw error;
  }
};
