# API Infrastructure Documentation

## 📁 Folder Structure

```
/src/api
  /config
    axios.ts          # Axios instance with interceptors
    queryClient.ts    # TanStack Query client config
    queryKeys.ts      # Centralized query keys factory
  /services
    authService.ts    # Auth API calls
    userService.ts    # User API calls
    # Add more services as needed...
  /hooks
    useAuth.ts        # Auth React Query hooks
    useUsers.ts       # User React Query hooks
    # Add more hooks as needed...
  /types
    index.ts          # TypeScript type definitions
```

---

## 🚀 Quick Start

### 1. Environment Setup

Create a `.env` file in project root:

```bash
VITE_API_BASE_URL=http://localhost:8000/api
```

### 2. Using Auth Hooks

```tsx
import { useLogin, useCurrentUser, useLogout } from './api/hooks/useAuth';

function LoginPage() {
  const login = useLogin();
  const { data: user, isLoading } = useCurrentUser();
  const logout = useLogout();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate({
      email: 'user@example.com',
      password: 'password123',
    });
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Your form fields */}
      <button type="submit" disabled={login.isPending}>
        {login.isPending ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
```

### 3. Using Data Fetching Hooks

```tsx
import { useUsers, useCreateUser } from './api/hooks/useUsers';

function UsersPage() {
  const { data, isLoading, error } = useUsers({ page: 1, per_page: 10 });
  const createUser = useCreateUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Users ({data?.meta.total})</h1>
      <ul>
        {data?.data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 📚 Core Concepts

### Axios Instance

The axios instance in [axios.ts](file:///Users/alifanleywin/Sites/project-internship-report/src/api/config/axios.ts) includes:
- **Base URL** from environment variable
- **Request Interceptor**: Automatically adds auth token to all requests
- **Response Interceptor**: Handles common errors (401, 403, 404, 500)

### Query Client

The [queryClient.ts](file:///Users/alifanleywin/Sites/project-internship-report/src/api/config/queryClient.ts) configures:
- **Stale Time**: 5 minutes (data fresh period)
- **Cache Time**: 10 minutes (inactive data retention)
- **Retry**: 1 time for queries, 0 for mutations
- **Refetch**: On reconnect only

### Query Keys

The [queryKeys.ts](file:///Users/alifanleywin/Sites/project-internship-report/src/api/config/queryKeys.ts) factory provides:
- Consistent cache keys across the app
- Type-safe query key generation
- Easy cache invalidation

---

## 🔧 Adding New Entities

### Step 1: Add Types

In [types/index.ts](file:///Users/alifanleywin/Sites/project-internship-report/src/api/types/index.ts):

```ts
export interface Company {
  id: string;
  name: string;
  email: string;
  // ... more fields
}
```

### Step 2: Add Query Keys

In [queryKeys.ts](file:///Users/alifanleywin/Sites/project-internship-report/src/api/config/queryKeys.ts):

```ts
export const queryKeys = {
  // ... existing keys
  companies: {
    all: ['companies'] as const,
    list: (filters?: Record<string, unknown>) => ['companies', 'list', filters] as const,
    detail: (id: string) => ['companies', 'detail', id] as const,
  },
};
```

### Step 3: Create Service

Create `services/companyService.ts`:

```ts
import apiClient from '../config/axios';
import type { Company, PaginatedResponse } from '../types';

export const companyService = {
  getCompanies: async (params?: any): Promise<PaginatedResponse<Company>> => {
    const response = await apiClient.get('/companies', { params });
    return response.data;
  },
  
  getCompany: async (id: string): Promise<Company> => {
    const response = await apiClient.get(`/companies/${id}`);
    return response.data;
  },
  
  // ... more CRUD methods
};
```

### Step 4: Create Hooks

Create `hooks/useCompanies.ts`:

```ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { companyService } from '../services/companyService';
import { queryKeys } from '../config/queryKeys';

export const useCompanies = (params?: any) => {
  return useQuery({
    queryKey: queryKeys.companies.list(params),
    queryFn: () => companyService.getCompanies(params),
  });
};

export const useCreateCompany = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: companyService.createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.companies.all });
    },
  });
};
```

---

## 💡 Best Practices

### 1. Always Use Query Keys Factory

❌ **Bad**:
```ts
useQuery({ queryKey: ['users', id], ... })
```

✅ **Good**:
```ts
useQuery({ queryKey: queryKeys.users.detail(id), ... })
```

### 2. Invalidate Cache After Mutations

```ts
const createUser = useMutation({
  mutationFn: userService.createUser,
  onSuccess: () => {
    // Invalidate to trigger refetch
    queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
  },
});
```

### 3. Handle Loading and Error States

```ts
const { data, isLoading, error } = useUsers();

if (isLoading) return <Spinner />;
if (error) return <ErrorMessage error={error} />;

return <UserList users={data.data} />;
```

### 4. Use Optimistic Updates for Better UX

```ts
const updateUser = useMutation({
  mutationFn: userService.updateUser,
  onMutate: async (newData) => {
    // Cancel outgoing refetches
    await queryClient.cancelQueries({ queryKey: queryKeys.users.detail(newData.id) });
    
    // Snapshot previous value
    const previousUser = queryClient.getQueryData(queryKeys.users.detail(newData.id));
    
    // Optimistically update
    queryClient.setQueryData(queryKeys.users.detail(newData.id), newData);
    
    return { previousUser };
  },
  onError: (err, newData, context) => {
    // Rollback on error
    queryClient.setQueryData(
      queryKeys.users.detail(newData.id),
      context?.previousUser
    );
  },
});
```

---

## 🔐 Authentication Flow

1. **Login**: Call `useLogin()` hook with credentials
2. **Token Storage**: Token automatically saved to localStorage
3. **Auto-Redirect**: User redirected to role-specific dashboard
4. **Authenticated Requests**: Token auto-added to all API requests
5. **Logout**: Call `useLogout()` to clear cache and redirect

---

## 🎯 Example: Complete CRUD Component

```tsx
import { useUsers, useCreateUser, useUpdateUser, useDeleteUser } from './api/hooks/useUsers';
import { useState } from 'react';

function UserManagement() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useUsers({ page, per_page: 10 });
  const createUser = useCreateUser();
  const updateUser = useUpdateUser();
  const deleteUser = useDeleteUser();

  const handleCreate = () => {
    createUser.mutate({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'student',
    });
  };

  const handleUpdate = (id: string) => {
    updateUser.mutate({
      id,
      data: { name: 'Updated Name' },
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure?')) {
      deleteUser.mutate(id);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={handleCreate}>Create User</button>
      <table>
        {data?.data.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => handleUpdate(user.id)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
      <button onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
```

---

## 🐛 Debugging

### Enable React Query DevTools

Install:
```bash
npm install @tanstack/react-query-devtools
```

Add to `main.tsx`:
```tsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// In your app
<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
```

---

## 📋 Checklist Template for New Entities

- [ ] Add TypeScript types in `types/index.ts`
- [ ] Add query keys in `config/queryKeys.ts`
- [ ] Create service file in `services/`
- [ ] Create hooks file in `hooks/`
- [ ] Test with DevTools
- [ ] Add error handling
- [ ] Update this documentation

---

**Last Updated**: 2026-02-05
