# Project Internship Report

## 📦 Installation

Follow these steps to get the project running on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/alifanLeywin/project-internship-report.git
cd project-internship-report
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

The application will be available at **http://localhost:5173**


A modern web application for internship management system built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## 🚀 Tech Stack

- **React** 19.2.0
- **TypeScript** 5.9.3
- **Vite** 7.2.5 (Rolldown)
- **Tailwind CSS** 4.1.18
- **React Router** 7.13.0
- **Lucide React** - Icon library
- **React Icons** - Additional icons

## 📁 Project Structure

```
/src
  /assets          # Static assets
  /component       # Shared/reusable components
  /pages
    /Authentication # Authentication pages (Login, Register)
    /Admin         # Admin dashboard pages
    /Teacher       # Teacher-specific pages
    /Student       # Student-specific pages
    /Company       # Company portal pages
    /Superadmin    # Superadmin pages
  App.tsx          # Main app component
  index.css        # Global styles with Tailwind
  main.tsx         # App entry point
```

## 🎨 Features

- ✅ Modern authentication UI
- ✅ Role-based access (Student, Teacher, Company, Admin, Superadmin)
- ✅ Dark theme design
- ✅ Responsive layout
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v4 for styling

## 🔧 Development Notes

- This project uses **Tailwind CSS v4**, which has different syntax from v3
- Read `AGENTS.md` for detailed coding guidelines and project specifications
- Uses React 19 modern patterns (no `React.FC`)

## 📚 Documentation

- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/)

## 👨‍💻 Author

Alifan Leywin

## 📄 License

This project is for educational purposes.
