// Example: How to integrate the dashboards with React Router

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all dashboards
import SuperadminDashboard from './pages/Superadmin/SuperadminDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CompanyDashboard from './pages/Company/CompanyDashboard';
import TeacherDashboard from './pages/Teacher/TeacherDashboard';
import StudentDashboard from './pages/Student/StudentDashboard';
import Login from './pages/Authentication/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        {/* Superadmin Routes */}
        <Route path="/superadmin" element={<SuperadminDashboard />} />
        {/* Add more superadmin routes here */}

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        {/* Add more admin routes here */}

        {/* Company Routes */}
        <Route path="/company" element={<CompanyDashboard />} />
        {/* Add more company routes here */}

        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherDashboard />} />
        {/* Add more teacher routes here */}

        {/* Student Routes */}
        <Route path="/student" element={<StudentDashboard />} />
        {/* Add more student routes here */}

        {/* Default Route */}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}