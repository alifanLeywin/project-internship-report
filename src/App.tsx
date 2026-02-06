import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Authentication
import Login from './pages/Authentication/Login';

// Superadmin Dashboard
import SuperadminDashboard from './pages/Superadmin/SuperadminDashboard';

// Superadmin - User Management
import UsersIndex from './pages/Superadmin/Users/index';
import UsersCreate from './pages/Superadmin/Users/create';
import UsersEdit from './pages/Superadmin/Users/edit';
import RolesIndex from './pages/Superadmin/Roles/index';

// Superadmin - Master Data
import JurusanIndex from './pages/Superadmin/Jurusan/index';
import JurusanCreate from './pages/Superadmin/Jurusan/create';
import JurusanEdit from './pages/Superadmin/Jurusan/edit';
import TahunAjaranIndex from './pages/Superadmin/TahunAjaran/index';
import TahunAjaranCreate from './pages/Superadmin/TahunAjaran/create';
import TahunAjaranEdit from './pages/Superadmin/TahunAjaran/edit';
import KelasIndex from './pages/Superadmin/Kelas/index';
import KelasCreate from './pages/Superadmin/Kelas/create';
import KelasEdit from './pages/Superadmin/Kelas/edit';

// Superadmin - System Configuration
import SettingsIndex from './pages/Superadmin/Settings/index';

// Other Role Dashboards
import AdminDashboard from './pages/Admin/AdminDashboard';
import CompanyDashboard from './pages/Company/CompanyDashboard';
import TeacherDashboard from './pages/Teacher/TeacherDashboard';
import StudentDashboard from './pages/Student/StudentDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        {/* ==================== SUPERADMIN ROUTES ==================== */}
        <Route path="/superadmin" element={<SuperadminDashboard />} />

        {/* User Management */}
        <Route path="/superadmin/users" element={<UsersIndex />} />
        <Route path="/superadmin/users/create" element={<UsersCreate />} />
        <Route path="/superadmin/users/:id/edit" element={<UsersEdit />} />
        <Route path="/superadmin/roles" element={<RolesIndex />} />

        {/* Master Data - Jurusan */}
        <Route path="/superadmin/jurusan" element={<JurusanIndex />} />
        <Route path="/superadmin/jurusan/create" element={<JurusanCreate />} />
        <Route path="/superadmin/jurusan/:id/edit" element={<JurusanEdit />} />

        {/* Master Data - Tahun Ajaran */}
        <Route path="/superadmin/tahun-ajaran" element={<TahunAjaranIndex />} />
        <Route path="/superadmin/tahun-ajaran/create" element={<TahunAjaranCreate />} />
        <Route path="/superadmin/tahun-ajaran/:id/edit" element={<TahunAjaranEdit />} />

        {/* Master Data - Kelas */}
        <Route path="/superadmin/kelas" element={<KelasIndex />} />
        <Route path="/superadmin/kelas/create" element={<KelasCreate />} />
        <Route path="/superadmin/kelas/:id/edit" element={<KelasEdit />} />

        {/* System Configuration */}
        <Route path="/superadmin/settings" element={<SettingsIndex />} />

        {/* ==================== OTHER ROLE ROUTES ==================== */}
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Company Routes */}
        <Route path="/company" element={<CompanyDashboard />} />

        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherDashboard />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentDashboard />} />

        {/* Default Route */}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}