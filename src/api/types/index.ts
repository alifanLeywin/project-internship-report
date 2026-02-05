// /**
//  * API Response Types
//  * 
//  * Define your API response interfaces here.
//  * These should match your backend API structure.
//  */

// // Common response wrapper
// export interface ApiResponse<T> {
//     data: T;
//     message?: string;
//     status: number;
// }

// // Paginated response
// export interface PaginatedResponse<T> {
//     data: T[];
//     meta: {
//         current_page: number;
//         last_page: number;
//         per_page: number;
//         total: number;
//     };
// }

// // User types
// export interface User {
//     id: string;
//     name: string;
//     email: string;
//     role: 'superadmin' | 'admin' | 'company' | 'teacher' | 'student';
//     created_at: string;
//     updated_at: string;
// }

// // Auth types
// export interface AuthResponse {
//     token: string;
//     user: User;
// }

// export interface LoginCredentials {
//     email: string;
//     password: string;
// }

// // Company types
// export interface Company {
//     id: string;
//     name: string;
//     email: string;
//     phone?: string;
//     address?: string;
//     created_at: string;
//     updated_at: string;
// }

// // Student types
// export interface Student {
//     id: string;
//     user_id: string;
//     name: string;
//     email: string;
//     student_id: string;
//     created_at: string;
//     updated_at: string;
// }

// // Teacher types
// export interface Teacher {
//     id: string;
//     user_id: string;
//     name: string;
//     email: string;
//     created_at: string;
//     updated_at: string;
// }

// // Internship types
// export interface Internship {
//     id: string;
//     student_id: string;
//     company_id: string;
//     title: string;
//     description?: string;
//     start_date: string;
//     end_date: string;
//     status: 'pending' | 'active' | 'completed' | 'cancelled';
//     created_at: string;
//     updated_at: string;
// }

// // Report types
// export interface Report {
//     id: string;
//     internship_id: string;
//     title: string;
//     content: string;
//     created_at: string;
//     updated_at: string;
// }

// // Error response
// export interface ApiError {
//     message: string;
//     errors?: Record<string, string[]>;
// }
