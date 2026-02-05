import {
  LayoutDashboard,
  Users,
  Building2,
  GraduationCap,
  FileText,
  Settings,
  BookOpen,
  ClipboardList,
  BarChart3,
  UserCog,
} from 'lucide-react';

export type UserRole = 'superadmin' | 'admin' | 'company' | 'teacher' | 'student';

export interface MenuItem {
  label: string;
  icon: any;
  path: string;
}

export const sidebarMenus: Record<UserRole, MenuItem[]> = {
  superadmin: [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/superadmin' },
    { label: 'Users', icon: Users, path: '/superadmin/users' },
    { label: 'Admins', icon: UserCog, path: '/superadmin/admins' },
    { label: 'Companies', icon: Building2, path: '/superadmin/companies' },
    { label: 'Reports', icon: BarChart3, path: '/superadmin/reports' },
    { label: 'Settings', icon: Settings, path: '/superadmin/settings' },
  ],
  admin: [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { label: 'Companies', icon: Building2, path: '/admin/companies' },
    { label: 'Teachers', icon: GraduationCap, path: '/admin/teachers' },
    { label: 'Students', icon: Users, path: '/admin/students' },
    { label: 'Reports', icon: FileText, path: '/admin/reports' },
    { label: 'Settings', icon: Settings, path: '/admin/settings' },
  ],
  company: [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/company' },
    { label: 'Internships', icon: ClipboardList, path: '/company/internships' },
    { label: 'Interns', icon: Users, path: '/company/interns' },
    { label: 'Reports', icon: FileText, path: '/company/reports' },
    { label: 'Settings', icon: Settings, path: '/company/settings' },
  ],
  teacher: [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/teacher' },
    { label: 'Students', icon: Users, path: '/teacher/students' },
    { label: 'Assignments', icon: ClipboardList, path: '/teacher/assignments' },
    { label: 'Reports', icon: FileText, path: '/teacher/reports' },
    { label: 'Settings', icon: Settings, path: '/teacher/settings' },
  ],
  student: [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/student' },
    { label: 'My Internship', icon: BookOpen, path: '/student/internship' },
    { label: 'Assignments', icon: ClipboardList, path: '/student/assignments' },
    { label: 'Reports', icon: FileText, path: '/student/reports' },
    { label: 'Settings', icon: Settings, path: '/student/settings' },
  ],
};
