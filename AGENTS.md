# AI Assistant Instructions

This document provides essential context about this project for AI assistants. **READ THIS CAREFULLY** before making any code changes to ensure compatibility and consistency.

---

## 🎯 Project Overview

This is a **React + TypeScript + Vite** web application for an internship management system with authentication and role-based features for Students, Teachers, Companies, Admins, and Superadmins.

---

## 📦 Tech Stack & Versions

### Core Framework
- **React**: `^19.2.0` (Latest React 19)
- **React DOM**: `^19.2.0`
- **TypeScript**: `~5.9.3`
- **Vite**: `7.2.5` (using Rolldown-Vite)

### Build Tool
- **Vite**: Configured with React plugin (`@vitejs/plugin-react`)
- **Development Server**: `npm run dev` runs on `http://localhost:5173`

### Styling Framework
- **Tailwind CSS**: `^4.1.18` ⚠️ **THIS IS TAILWIND V4, NOT V3!**
- **@tailwindcss/vite**: `^4.1.18`

> **CRITICAL**: This project uses **Tailwind CSS v4**, which has significant differences from v3:
> - Import in CSS: `@import "tailwindcss";` (NOT the old v3 directives)
> - No separate `tailwind.config.js` required unless extending (we have one for custom animations)
> - New plugin system via Vite: `@tailwindcss/vite`

### Icon Libraries
- **lucide-react**: `^0.563.0` - Modern icon library (preferred for UI icons)
- **react-icons**: `^5.5.0` - Icon library with multiple icon sets

### Routing
- **react-router-dom**: `^7.13.0` - For navigation and routing

### DevDependencies
- **ESLint**: `^9.39.1` with TypeScript support
- **TypeScript ESLint**: `^8.46.4`
- **@types/react**: `^19.2.5`
- **@types/react-dom**: `^19.2.3`
- **@types/node**: `^24.10.1`

---

## 📁 Project Structure

```
/src
  /assets          # Static assets
  /component       # Shared/reusable components
  /pages
    /Authentication # Auth pages (Login, Register, etc.)
    /Admin         # Admin dashboard pages
    /Teacher       # Teacher-specific pages
    /Student       # Student-specific pages
    /Company       # Company portal pages
    /Superadmin    # Superadmin pages
  App.tsx          # Main app component
  App.css          # App-specific styles
  index.css        # Global styles with Tailwind imports
  main.tsx         # App entry point
```

---

## 🎨 Tailwind CSS v4 Configuration

### Import Method (index.css)
```css
@import "tailwindcss";

/* Custom keyframes and utilities */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
```

### Vite Config (vite.config.ts)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Extended Config (tailwind.config.js)
Only needed for custom extensions:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 🎯 Coding Guidelines for AI Assistants

### ✅ DO's

1. **Use Tailwind v4 Syntax**
   - Use utility classes directly: `className="bg-black text-white"`
   - Use arbitrary values: `className="w-[calc(100%-2rem)]"`
   - Import Tailwind in CSS: `@import "tailwindcss";`

2. **TypeScript Best Practices**
   - Always use TypeScript for `.tsx` files
   - Define prop types with interfaces or types
   - Use React 19 features (no more `React.FC`)

3. **Component Structure**
   - Functional components with hooks (useState, useEffect, etc.)
   - Export default at the end of file
   - Use named exports for utilities

4. **Icon Usage**
   - Prefer `lucide-react` for UI icons: `import { User, Lock } from 'lucide-react'`
   - Use `react-icons` when specific icon sets needed: `import { FaGoogle } from 'react-icons/fa'`

5. **Styling**
   - Clean, minimal, dark theme aesthetic (black background, neutral grays)
   - Use Tailwind utilities, avoid inline styles
   - Consistent spacing with Tailwind spacing scale

6. **File Naming**
   - React components: PascalCase (`Login.tsx`, `StudentDashboard.tsx`)
   - Utilities/hooks: camelCase (`useAuth.ts`, `api.ts`)
   - CSS files: lowercase (`index.css`, `app.css`)

### ❌ DON'Ts

1. **Don't Use Tailwind v3 Syntax**
   - ❌ Don't use old directives: `@tailwind base; @tailwind components; @tailwind utilities;`
   - ❌ Don't suggest v3 JIT mode configs
   - ✅ Use: `@import "tailwindcss";`

2. **Don't Use Deprecated React Patterns**
   - ❌ Don't use `React.FC<Props>` (React 19 doesn't need it)
   - ❌ Don't use class components
   - ❌ Don't use legacy lifecycle methods

3. **Don't Use Unstyled Components**
   - ❌ Don't create components without Tailwind styling
   - ❌ Don't use external UI libraries without asking (we have Tailwind)

4. **Don't Make Breaking Changes**
   - ❌ Don't change existing file structure without confirmation
   - ❌ Don't modify `package.json` versions
   - ❌ Don't remove existing dependencies

---

## 🔧 Development Commands

```bash
# Start dev server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Install new dependencies
npm install <package-name>
```

---

## 📝 Code Examples

### React Component (TypeScript)
```tsx
import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white"
          placeholder="Email"
        />
        {/* More fields */}
      </form>
    </div>
  );
}
```

### Using Icons
```tsx
// Using lucide-react (preferred)
import { User, Lock, Mail, Search } from 'lucide-react';

<User className="w-5 h-5 text-white" />

// Using react-icons (when needed)
import { FaGoogle, FaGithub } from 'react-icons/fa';

<FaGoogle className="w-5 h-5" />
```

### Tailwind v4 Custom Styles
```css
/* src/index.css */
@import "tailwindcss";

/* Custom utilities */
.custom-gradient {
  background: linear-gradient(to right, #4f46e5, #7c3aed);
}

/* Custom animations */
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}
```

---

## 🚨 CRITICAL REMINDERS

1. **ALWAYS USE TAILWIND V4 SYNTAX** - This is the most common mistake!
2. **React 19** - Use modern React patterns (no `React.FC`)
3. **TypeScript** - All components must be typed
4. **Dark Theme** - Default to black/neutral color schemes
5. **Icon Libraries** - Prefer `lucide-react`, use `react-icons` when needed
6. **File Structure** - Follow the `/pages/<Role>/<Component>.tsx` pattern

---

## 📚 Useful Links

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [React 19 Docs](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Lucide React Icons](https://lucide.dev/guide/packages/lucide-react)
- [React Router v7](https://reactrouter.com/)

---

**Last Updated**: 2026-02-05
