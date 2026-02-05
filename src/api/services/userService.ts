// import apiClient from '../config/axios';
// import type { User, PaginatedResponse } from '../types';

// /**
//  * User API Service
//  * 
//  * All user-related API calls.
//  */

// export const userService = {
//     // Get all users (paginated)
//     getUsers: async (params?: {
//         page?: number;
//         per_page?: number;
//         search?: string;
//         role?: string;
//     }): Promise<PaginatedResponse<User>> => {
//         const response = await apiClient.get<PaginatedResponse<User>>('/users', { params });
//         return response.data;
//     },

//     // Get single user
//     getUser: async (id: string): Promise<User> => {
//         const response = await apiClient.get<User>(`/users/${id}`);
//         return response.data;
//     },

//     // Create user
//     createUser: async (data: {
//         name: string;
//         email: string;
//         password: string;
//         role: string;
//     }): Promise<User> => {
//         const response = await apiClient.post<User>('/users', data);
//         return response.data;
//     },

//     // Update user
//     updateUser: async (id: string, data: Partial<User>): Promise<User> => {
//         const response = await apiClient.put<User>(`/users/${id}`, data);
//         return response.data;
//     },

//     // Delete user
//     deleteUser: async (id: string): Promise<void> => {
//         await apiClient.delete(`/users/${id}`);
//     },
// };

// export default userService;
