import axios from 'axios';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL, DEFAULT_API_TOKEN } from '../../config/env';
import Cookies from 'js-cookie';

interface ErrorResponse {
  message?: string;
  error?: string;
  errors?: Record<string, unknown> | unknown[];
}

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = Cookies.get('accessToken');
  
  if (token) {
    // User is logged in - use Bearer token
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    // User is logged out - use ZRealtyServiceApiKey header without Bearer
    // Remove any existing lowercase version first
    const headers = config.headers as Record<string, unknown>;
    delete headers['zrealtyserviceapikey'];
    delete headers['ZRealtyServiceApiKey'];
    
    // Set header with exact camelCase
    // Note: HTTP headers are case-insensitive per spec, but some servers may require exact case
    // The browser may display headers as lowercase in network tab, but the value is correct
    headers['ZRealtyServiceApiKey'] = DEFAULT_API_TOKEN;
  }
  
  return config;
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle network errors (no response)
    if (!error.response) {
      return Promise.reject({
        status: 0,
        message: 'Network error - please check your connection',
        data: null
      });
    }

    const { status, data, headers } = error.response;
    const errorData = data as ErrorResponse | string;

    // Handle HTML error responses
    const contentType = headers?.['content-type'];
    if (contentType?.includes('text/html')) {
      return Promise.reject({
        status,
        message: `Server error (${status}) - please try again later`,
        data: null
      });
    }

    // Extract error message with proper typing
    let errorMessage = 'An unexpected error occurred';

    if (typeof errorData === 'string') {
      errorMessage = errorData;
    } else if (errorData?.message) {
      errorMessage = errorData.message;
    } else if (errorData?.error) {
      errorMessage = errorData.error;
    } else if (errorData?.errors) {
      if (Array.isArray(errorData.errors) && typeof errorData.errors[0] === 'string') {
        errorMessage = errorData.errors[0];
      } else if (
        errorData.errors &&
        typeof errorData.errors === 'object' &&
        !Array.isArray(errorData.errors)
      ) {
        const firstKey = Object.keys(errorData.errors)[0];
        const firstError = (errorData.errors as Record<string, unknown>)[firstKey];
        if (typeof firstError === 'string') {
          errorMessage = firstError;
        } else if (Array.isArray(firstError) && typeof firstError[0] === 'string') {
          errorMessage = firstError[0];
        }
      }
    }

    // Default messages for common status codes
    if (!errorMessage || errorMessage === 'An unexpected error occurred') {
      switch (status) {
        case 400: errorMessage = 'Bad request'; break;
        case 403: errorMessage = 'Forbidden - insufficient permissions'; break;
        case 404: errorMessage = 'Resource not found'; break;
        case 500: errorMessage = 'Internal server error'; break;
        case 502: errorMessage = 'Bad gateway'; break;
        case 503: errorMessage = 'Service unavailable'; break;
        case 504: errorMessage = 'Gateway timeout'; break;
      }
    }

    return Promise.reject({
      status,
      message: errorMessage,
      data: errorData
    });
  }
);

export default axiosInstance;
