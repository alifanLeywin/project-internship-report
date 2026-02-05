// /**
//  * Query Keys Factory
//  * 
//  * Centralized place to manage all React Query keys.
//  * This prevents typos and makes it easier to invalidate caches.
//  */

// export const queryKeys = {
//     // Auth
//     auth: {
//         me: ['auth', 'me'] as const,
//         login: ['auth', 'login'] as const,
//     },

//     // Users
//     users: {
//         all: ['users'] as const,
//         list: (filters?: Record<string, unknown>) => ['users', 'list', filters] as const,
//         detail: (id: string) => ['users', 'detail', id] as const,
//     },

//     // Companies
//     companies: {
//         all: ['companies'] as const,
//         list: (filters?: Record<string, unknown>) => ['companies', 'list', filters] as const,
//         detail: (id: string) => ['companies', 'detail', id] as const,
//     },

//     // Students
//     students: {
//         all: ['students'] as const,
//         list: (filters?: Record<string, unknown>) => ['students', 'list', filters] as const,
//         detail: (id: string) => ['students', 'detail', id] as const,
//     },

//     // Teachers
//     teachers: {
//         all: ['teachers'] as const,
//         list: (filters?: Record<string, unknown>) => ['teachers', 'list', filters] as const,
//         detail: (id: string) => ['teachers', 'detail', id] as const,
//     },

//     // Internships
//     internships: {
//         all: ['internships'] as const,
//         list: (filters?: Record<string, unknown>) => ['internships', 'list', filters] as const,
//         detail: (id: string) => ['internships', 'detail', id] as const,
//     },

//     // Reports
//     reports: {
//         all: ['reports'] as const,
//         list: (filters?: Record<string, unknown>) => ['reports', 'list', filters] as const,
//         detail: (id: string) => ['reports', 'detail', id] as const,
//     },
// } as const;

// export default queryKeys;
