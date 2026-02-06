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
  Briefcase,
  Calendar,
  HelpCircle,
  Search,
  FolderOpen,
  TrendingUp,
  Shield,
  Database,
  Server,
  FolderCog,
  BookMarked,
  School,
  CalendarDays,
  Image,
} from 'lucide-react';

export type UserRole = 'superadmin' | 'admin' | 'company' | 'teacher' | 'student';

export interface MenuItem {
  label: string;
  icon: any;
  path: string;
}

export interface MenuGroup {
  heading?: string;
  items: MenuItem[];
}

export interface BottomMenuItem {
  label: string;
  icon: any;
  path: string;
}

// ==================== SUPERADMIN MENU ====================
const superadminMenus: MenuGroup[] = [
  {
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/superadmin' },
    ],
  },
  {
    heading: 'User Management',
    items: [
      { label: 'Data Pengguna', icon: Users, path: '/superadmin/users' },
      { label: 'Role & Permissions', icon: Shield, path: '/superadmin/roles' },
    ],
  },
  {
    heading: 'Master Data',
    items: [
      { label: 'Data Jurusan', icon: BookMarked, path: '/superadmin/jurusan' },
      { label: 'Tahun Ajaran', icon: CalendarDays, path: '/superadmin/tahun-ajaran' },
      { label: 'Data Kelas', icon: School, path: '/superadmin/kelas' },
    ],
  },
  {
    heading: 'System Configuration',
    items: [
      { label: 'Site Settings', icon: Settings, path: '/superadmin/settings' },
    ],
  },
];

// ==================== ADMIN MENU ====================
const adminMenus: MenuGroup[] = [
  {
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    ],
  },
  {
    heading: 'Data Management',
    items: [
      { label: 'Companies', icon: Building2, path: '/admin/companies' },
      { label: 'Teachers', icon: GraduationCap, path: '/admin/teachers' },
      { label: 'Students', icon: Users, path: '/admin/students' },
    ],
  },
  {
    heading: 'Internship',
    items: [
      { label: 'Internships', icon: Briefcase, path: '/admin/internships' },
      { label: 'Reports', icon: FileText, path: '/admin/reports' },
    ],
  },
];

// ==================== COMPANY MENU ====================
const companyMenus: MenuGroup[] = [
  {
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/company' },
    ],
  },
  {
    heading: 'Internship',
    items: [
      { label: 'Open Positions', icon: Briefcase, path: '/company/positions' },
      { label: 'Interns', icon: Users, path: '/company/interns' },
      { label: 'Applications', icon: ClipboardList, path: '/company/applications' },
    ],
  },
  {
    heading: 'Reports',
    items: [
      { label: 'Evaluations', icon: FileText, path: '/company/evaluations' },
      { label: 'Reports', icon: BarChart3, path: '/company/reports' },
    ],
  },
];

// ==================== TEACHER MENU ====================
const teacherMenus: MenuGroup[] = [
  {
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/teacher' },
    ],
  },
  {
    heading: 'Students',
    items: [
      { label: 'My Students', icon: Users, path: '/teacher/students' },
      { label: 'Schedule', icon: Calendar, path: '/teacher/schedule' },
    ],
  },
  {
    heading: 'Tasks',
    items: [
      { label: 'Assignments', icon: ClipboardList, path: '/teacher/assignments' },
      { label: 'Evaluations', icon: FileText, path: '/teacher/evaluations' },
      { label: 'Reports', icon: BarChart3, path: '/teacher/reports' },
    ],
  },
];

// ==================== STUDENT MENU ====================
const studentMenus: MenuGroup[] = [
  {
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/student' },
    ],
  },
  {
    heading: 'My Internship',
    items: [
      { label: 'Internship Info', icon: BookOpen, path: '/student/internship' },
      { label: 'Schedule', icon: Calendar, path: '/student/schedule' },
    ],
  },
  {
    heading: 'Tasks',
    items: [
      { label: 'Daily Journal', icon: ClipboardList, path: '/student/journal' },
      { label: 'Assignments', icon: ClipboardList, path: '/student/assignments' },
      { label: 'Reports', icon: FileText, path: '/student/reports' },
    ],
  },
];

export const sidebarMenus: Record<UserRole, MenuGroup[]> = {
  superadmin: superadminMenus,
  admin: adminMenus,
  company: companyMenus,
  teacher: teacherMenus,
  student: studentMenus,
};

export const bottomMenuItems: BottomMenuItem[] = [
  { label: 'Settings', icon: Settings, path: '/settings' },
  { label: 'Get Help', icon: HelpCircle, path: '/help' },
  { label: 'Search', icon: Search, path: '/search' },
];
