import { Link, useLocation } from 'react-router-dom';
import { sidebarMenus, bottomMenuItems, type UserRole } from '../../config/sidebarConfig';
import { LogOut, PlusCircle, ChevronLeft, ChevronRight, Command } from 'lucide-react';

interface SidebarProps {
    role: UserRole;
    isOpen: boolean;
    isCollapsed: boolean;
    onClose: () => void;
    onToggleCollapse: () => void;
}

export default function Sidebar({ role, isOpen, isCollapsed, onClose, onToggleCollapse }: SidebarProps) {
    const location = useLocation();
    const menuGroups = sidebarMenus[role];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <aside
            className={`
        fixed lg:sticky inset-y-0 left-0 top-0 z-50
        ${isCollapsed ? 'lg:w-16' : 'lg:w-56'} w-56
        h-screen bg-neutral-950 border-r border-neutral-800 flex flex-col
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
        >
            {/* Logo/Brand */}
            <div className="px-3 py-4 border-b border-neutral-800">
                <div className={`flex items-center gap-2 ${isCollapsed ? 'lg:justify-center' : ''}`}>
                    <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
                        <Command className="w-4 h-4 text-black" />
                    </div>
                    <span className={`font-semibold text-white text-sm ${isCollapsed ? 'lg:hidden' : ''}`}>
                        zzLeywin
                    </span>
                </div>
            </div>

            {/* Quick Create Button */}
            <div className={`px-3 py-3 ${isCollapsed ? 'lg:px-2' : ''}`}>
                <button
                    className={`
            flex items-center gap-2 w-full px-3 py-2 
            bg-neutral-900 border border-neutral-800 rounded-md
            text-neutral-300 text-sm hover:bg-neutral-800 transition-colors
            ${isCollapsed ? 'lg:justify-center lg:px-0' : ''}
          `}
                >
                    <PlusCircle className="w-4 h-4" />
                    <span className={isCollapsed ? 'lg:hidden' : ''}>Quick Create</span>
                </button>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-3 py-2 overflow-y-auto">
                {menuGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className={groupIndex > 0 ? 'mt-4' : ''}>
                        {/* Group Heading */}
                        {group.heading && !isCollapsed && (
                            <div className="px-2 mb-2">
                                <span className="text-xs text-neutral-500">{group.heading}</span>
                            </div>
                        )}

                        {/* Group Items */}
                        <div className="space-y-0.5">
                            {group.items.map((item) => {
                                const Icon = item.icon;
                                const active = isActive(item.path);

                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={onClose}
                                        title={isCollapsed ? item.label : undefined}
                                        className={`
                      flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors
                      ${isCollapsed ? 'lg:justify-center' : ''}
                      ${active
                                                ? 'bg-neutral-800 text-white'
                                                : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                                            }
                    `}
                                    >
                                        <Icon className="w-4 h-4 flex-shrink-0" />
                                        <span className={isCollapsed ? 'lg:hidden' : ''}>{item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Bottom Section */}
            <div className="px-3 py-2 border-t border-neutral-800">
                {/* Bottom Menu Items */}
                <div className="space-y-0.5 mb-2">
                    {bottomMenuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                title={isCollapsed ? item.label : undefined}
                                className={`
                  flex items-center gap-2 px-2 py-1.5 rounded-md text-sm
                  text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors
                  ${isCollapsed ? 'lg:justify-center' : ''}
                `}
                            >
                                <Icon className="w-4 h-4" />
                                <span className={isCollapsed ? 'lg:hidden' : ''}>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Collapse Toggle */}
                <button
                    onClick={onToggleCollapse}
                    className="hidden lg:flex items-center gap-2 px-2 py-1.5 w-full rounded-md text-sm text-neutral-500 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                    {isCollapsed ? (
                        <ChevronRight className="w-4 h-4 mx-auto" />
                    ) : (
                        <>
                            <ChevronLeft className="w-4 h-4" />
                            <span>Collapse</span>
                        </>
                    )}
                </button>

                {/* User Profile */}
                <div className={`
          flex items-center gap-2 mt-3 px-2 py-2 rounded-md
          hover:bg-neutral-900 cursor-pointer transition-colors
          ${isCollapsed ? 'lg:justify-center' : ''}
        `}>
                    <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                        JD
                    </div>
                    <div className={isCollapsed ? 'lg:hidden' : ''}>
                        <p className="text-sm text-white font-medium">John Doe</p>
                        <p className="text-xs text-neutral-500">john@example.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
