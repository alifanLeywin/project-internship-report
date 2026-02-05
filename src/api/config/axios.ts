// import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

// // API Base URL - Change this to your backend URL
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// // Create axios instance with default config
// export const apiClient = axios.create({
//     baseURL: API_BASE_URL,
//     timeout: 10000,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// // Request interceptor - Add auth token to requests
// apiClient.interceptors.request.use(
//     (config: InternalAxiosRequestConfig) => {
//         // Get token from localStorage or your auth store
//         const token = localStorage.getItem('auth_token');

//         if (token && config.headers) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//         return config;
//     },
//     (error: AxiosError) => {
//         return Promise.reject(error);
//     }
// );

// // Response interceptor - Handle common errors
// apiClient.interceptors.response.use(
//     (response: AxiosResponse) => {
//         return response;
//     },
//     (error: AxiosError) => {
//         // Handle common HTTP errors
//         if (error.response) {
//             switch (error.response.status) {
//                 case 401:
//                     // Unauthorized - clear token and redirect to login
//                     localStorage.removeItem('auth_token');
//                     window.location.href = '/login';
//                     break;
//                 case 403:
//                     // Forbidden - no permission
//                     console.error('Access denied');
//                     break;
//                 case 404:
//                     // Not found
//                     console.error('Resource not found');
//                     break;
//                 case 500:
//                     // Server error
//                     console.error('Server error');
//                     break;
//                 default:
//                     console.error('API Error:', error.response.data);
//             }
//         } else if (error.request) {
//             // Network error
//             console.error('Network error - please check your connection');
//         }

//         return Promise.reject(error);
//     }
// );

// export default apiClient;
