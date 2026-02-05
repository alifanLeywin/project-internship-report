// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';
// import { authService } from '../services/authService';
// import { queryKeys } from '../config/queryKeys';
// import type { LoginCredentials } from '../types';

// /**
//  * Authentication Hooks
//  * 
//  * React Query hooks for authentication operations.
//  */

// // Get current user
// export const useCurrentUser = () => {
//     return useQuery({
//         queryKey: queryKeys.auth.me,
//         queryFn: authService.me,
//         retry: false,
//         // Don't refetch on mount if token exists
//         enabled: !!localStorage.getItem('auth_token'),
//     });
// };

// // Login mutation
// export const useLogin = () => {
//     const navigate = useNavigate();
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
//         onSuccess: (data) => {
//             // Set user data in cache
//             queryClient.setQueryData(queryKeys.auth.me, data.user);

//             // Redirect based on role
//             const roleRoutes = {
//                 superadmin: '/superadmin',
//                 admin: '/admin',
//                 company: '/company',
//                 teacher: '/teacher',
//                 student: '/student',
//             };

//             navigate(roleRoutes[data.user.role] || '/');
//         },
//         onError: (error) => {
//             console.error('Login failed:', error);
//         },
//     });
// };

// // Logout mutation
// export const useLogout = () => {
//     const navigate = useNavigate();
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationFn: authService.logout,
//         onSuccess: () => {
//             // Clear all cached data
//             queryClient.clear();

//             // Redirect to login
//             navigate('/login');
//         },
//     });
// };

// // Register mutation
// export const useRegister = () => {
//     const navigate = useNavigate();
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationFn: (data: {
//             name: string;
//             email: string;
//             password: string;
//             password_confirmation: string;
//             role: string;
//         }) => authService.register(data),
//         onSuccess: (data) => {
//             queryClient.setQueryData(queryKeys.auth.me, data.user);

//             const roleRoutes = {
//                 superadmin: '/superadmin',
//                 admin: '/admin',
//                 company: '/company',
//                 teacher: '/teacher',
//                 student: '/student',
//             };

//             navigate(roleRoutes[data.user.role] || '/');
//         },
//     });
// };
