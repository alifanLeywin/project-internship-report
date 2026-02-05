// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import { userService } from '../services/userService';
// import { queryKeys } from '../config/queryKeys';
// import type { User } from '../types';

// /**
//  * User Hooks
//  * 
//  * React Query hooks for user operations.
//  */

// // Get all users
// export const useUsers = (params?: {
//     page?: number;
//     per_page?: number;
//     search?: string;
//     role?: string;
// }) => {
//     return useQuery({
//         queryKey: queryKeys.users.list(params),
//         queryFn: () => userService.getUsers(params),
//     });
// };

// // Get single user
// export const useUser = (id: string) => {
//     return useQuery({
//         queryKey: queryKeys.users.detail(id),
//         queryFn: () => userService.getUser(id),
//         enabled: !!id,
//     });
// };

// // Create user
// export const useCreateUser = () => {
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationFn: (data: {
//             name: string;
//             email: string;
//             password: string;
//             role: string;
//         }) => userService.createUser(data),
//         onSuccess: () => {
//             // Invalidate users list to refetch
//             queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
//         },
//     });
// };

// // Update user
// export const useUpdateUser = () => {
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationFn: ({ id, data }: { id: string; data: Partial<User> }) =>
//             userService.updateUser(id, data),
//         onSuccess: (_, variables) => {
//             // Invalidate specific user and list
//             queryClient.invalidateQueries({ queryKey: queryKeys.users.detail(variables.id) });
//             queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
//         },
//     });
// };

// // Delete user
// export const useDeleteUser = () => {
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationFn: (id: string) => userService.deleteUser(id),
//         onSuccess: () => {
//             // Invalidate users list
//             queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
//         },
//     });
// };
