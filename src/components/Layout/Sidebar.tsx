import { Link, useLocation } from 'react-router-dom';
import { sidebarMenus, type UserRole } from '../../config/sidebarConfig';
import { LogOut } from 'lucide-react';

interface SidebarProps {
    role: UserRole;
}

export default function Sidebar({ role }: SidebarProps) {
    const location = useLocation();
    const menuItems = sidebarMenus[role];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <aside className="w-64 min-h-screen bg-neutral-900 border-r border-neutral-800 flex flex-col">
            {/* Logo/Brand */}
            <div className="p-6 border-b border-neutral-800">
                <h1 className="text-2xl font-bold text-white">InternHub</h1>
                <p className="text-sm text-neutral-400 mt-1 capitalize">{role} Portal</p>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${active
                                    ? 'bg-white text-black font-medium'
                                    : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                                }
              `}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-neutral-800">
                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-neutral-300 hover:bg-red-950 hover:text-red-400 transition-all duration-200">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}
