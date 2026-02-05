// import apiClient from '../config/axios';
// import type { AuthResponse, LoginCredentials, User } from '../types';

// /**
//  * Authentication API Service
//  * 
//  * All auth-related API calls.
//  */

// export const authService = {
//     // Login
//     login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
//         const response = await apiClient.post<AuthResponse>('/auth/login', credentials);

//         // Store token in localStorage
//         if (response.data.token) {
//             localStorage.setItem('auth_token', response.data.token);
//         }

//         return response.data;
//     },

//     // Logout
//     logout: async (): Promise<void> => {
//         await apiClient.post('/auth/logout');
//         localStorage.removeItem('auth_token');
//     },

//     // Get current user
//     me: async (): Promise<User> => {
//         const response = await apiClient.get<User>('/auth/me');
//         return response.data;
//     },

//     // Register
//     register: async (data: {
//         name: string;
//         email: string;
//         password: string;
//         password_confirmation: string;
//         role: string;
//     }): Promise<AuthResponse> => {
//         const response = await apiClient.post<AuthResponse>('/auth/register', data);

//         if (response.data.token) {
//             localStorage.setItem('auth_token', response.data.token);
//         }

//         return response.data;
//     },
// };

// export default authService;
