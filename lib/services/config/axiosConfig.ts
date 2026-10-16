import axios from 'axios';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL, DEFAULT_API_TOKEN, version } from '../../config/env';
import Cookies from 'js-cookie';

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const forceLogout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('refreshToken');
  const cookieOptions = { domain: '.zlendorealty.com', path: '/' };
  Cookies.remove('userData', cookieOptions);
  Cookies.remove('accessToken', cookieOptions);
  Cookies.remove('isAuthenticated', cookieOptions);

  // Clear cookies for the current domain just in case
  Cookies.remove('userData');
  Cookies.remove('accessToken');
  Cookies.remove('isAuthenticated');

  // Clear Local Storage and Session Storage
  localStorage.clear();
  sessionStorage.clear();

};

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
    // User is logged out - use zrealtyserviceapikey header without Bearer
    const headers = config.headers as Record<string, unknown>;
    delete headers['ZRealtyServiceApiKey'];

    // Set header with exact lowercase
    headers['zrealtyserviceapikey'] = DEFAULT_API_TOKEN;
  }

  return config;
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    // Handle network errors (no response)
    if (!error.response) {
      return Promise.reject({
        status: 0,
        message: 'Network error - please check your connection',
        data: null
      });
    }

    const { status, data, headers: responseHeaders } = error.response;
    const errorData = data as ErrorResponse | string;
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Refresh Token Logic
    if (status === 401 && !originalRequest._retry) {
      console.log("[REFRESH-DEBUG] 401 received for URL:", originalRequest.url);

      // Skip refresh for login and refresh token endpoints
      if (
        originalRequest.url?.includes("/AdminUser/login") ||
        originalRequest.url?.includes("/Login/RefreshToken")
      ) {
        console.log("[REFRESH-DEBUG] Skipping refresh - login/refresh endpoint");
        forceLogout();
        return Promise.reject({
          status,
          message: "Session expired - please login again",
          data: errorData,
        });
      }

      if (isRefreshing) {
        // If already refreshing, queue this request
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest._retry = true;

            // Force the new token into the headers
            if (originalRequest.headers) {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
            }

            // Fix for APIs that pass the token in the request body (like GetUserDetailsByToken)
            if (originalRequest.data) {
              try {
                let data = originalRequest.data;
                if (typeof data === 'string') {
                  try { data = JSON.parse(data); } catch (e) { }
                }
                if (data && typeof data === 'object' && (data as any).userToken) {
                  (data as any).userToken = token;
                  originalRequest.data = JSON.stringify(data);
                }
              } catch (e) { }
            }

            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      // Try to get refreshToken from LocalStorage first, then Cookies
      let refreshToken = localStorage.getItem("refreshToken") || Cookies.get("refreshToken");

      if (refreshToken) {
        // Clean the token to remove any extra quotes or whitespace
        refreshToken = refreshToken.trim();
        // Remove surrounding quotes if present
        if ((refreshToken.startsWith('"') && refreshToken.endsWith('"')) ||
          (refreshToken.startsWith("'") && refreshToken.endsWith("'"))) {
          refreshToken = refreshToken.slice(1, -1);
        }
        // Remove escaped quotes and nested quotes if any (e.g. "\"token\"")
        refreshToken = refreshToken.replace(/\\"/g, '"').replace(/\\'/g, "'").trim();
        // Final clean if it still has quotes after unescaping
        if (refreshToken.startsWith('"') && refreshToken.endsWith('"')) {
          refreshToken = refreshToken.slice(1, -1);
        }
      }

      console.log(
        "[REFRESH-DEBUG] refreshToken from localStorage (cleaned):",
        refreshToken
          ? "EXISTS (" + refreshToken.substring(0, 10) + "...)"
          : "NULL",
      );

      if (!refreshToken) {
        console.log("[REFRESH-DEBUG] No refresh token found - forcing logout");
        isRefreshing = false;
        processQueue({ message: "No refresh token" }, null);
        forceLogout();
        return Promise.reject({
          status,
          message: "Session expired - please login again",
          data: errorData,
        });
      }

      try {
        console.log("[REFRESH-DEBUG] Calling RefreshToken API...");
        // Use a separate axios instance to avoid interceptor loop
        const refreshResponse = await axios.post(
          `${API_BASE_URL}/Login/RefreshToken`,
          { refreshToken: refreshToken },
          {
            headers: { "Content-Type": "application/json" },
            timeout: 30000,
          },
        );

        console.log(
          "[REFRESH-DEBUG] Refresh API response:",
          JSON.stringify(Object.keys(refreshResponse.data)),
        );
        const newAccessToken = refreshResponse.data.accessToken;
        const newRefreshToken = refreshResponse.data.refreshToken;

        console.log(
          "[REFRESH-DEBUG] New accessToken:",
          newAccessToken ? "YES" : "NO",
          "| New refreshToken:",
          newRefreshToken ? "YES" : "NO",
        );

        if (newAccessToken) {
          localStorage.setItem("authToken", newAccessToken);
          localStorage.setItem("accessToken", newAccessToken);

          // CRITICAL: Clear any old subdomain-specific cookies before setting the new shared one
          Cookies.remove('accessToken'); // Clear local subdomain cookie
          Cookies.set('accessToken', newAccessToken, { domain: '.zlendorealty.com', path: '/' });

          // Update the global instance headers
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        }
        if (newRefreshToken) {
          localStorage.setItem("refreshToken", newRefreshToken);

          // CRITICAL: Clear any old subdomain-specific cookies before setting the new shared one
          Cookies.remove('refreshToken'); // Clear local subdomain cookie
          Cookies.set('refreshToken', newRefreshToken, { domain: '.zlendorealty.com', path: '/' });
        }

        isRefreshing = false;
        processQueue(null, newAccessToken);

        // Retry original request with new token
        // Ensure headers exist before setting
        if (originalRequest.headers) {
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        }

        // Fix for APIs that pass the token in the request body (like GetUserDetailsByToken)
        if (originalRequest.data) {
          try {
            // originalRequest.data might be a JSON string or an object depending on how it was sent
            let data = originalRequest.data;
            if (typeof data === 'string') {
              try {
                data = JSON.parse(data);
              } catch (e) {
                // If not valid JSON string, keep as is
              }
            }

            if (data && typeof data === 'object' && (data as any).userToken) {
              (data as any).userToken = newAccessToken;
              // Set the updated data back as a string to match axios expectations for POST
              originalRequest.data = JSON.stringify(data);
            }
          } catch (error) {
            console.error("[REFRESH-DEBUG] Failed to update request payload:", error);
          }
        }

        return axiosInstance(originalRequest);
      } catch (refreshError: any) {
        console.log(
          "[REFRESH-DEBUG] Refresh FAILED:",
          refreshError?.response?.status,
          refreshError?.message,
        );
        isRefreshing = false;
        processQueue(refreshError, null);

        // Ensure original request falls back to default headers if possible
        if (originalRequest.headers) {
          const headers = originalRequest.headers as any;
          delete headers['Authorization'];
          headers['zrealtyserviceapikey'] = DEFAULT_API_TOKEN;
        }

        forceLogout();
        return Promise.reject({
          status: 401,
          message: "Session expired - please login again",
          data: null,
        });
      }
    }

    // Handle HTML error responses
    const contentType = responseHeaders?.['content-type'];
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
