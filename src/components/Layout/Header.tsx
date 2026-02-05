import { Bell, Search, User } from 'lucide-react';
import type { UserRole } from '../../config/sidebarConfig';

interface HeaderProps {
    role: UserRole;
}

export default function Header({ role }: HeaderProps) {
    return (
        <header className="bg-neutral-900 border-b border-neutral-800 px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Search Bar */}
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Notifications */}
                    <button className="relative p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* User Profile */}
                    <div className="flex items-center gap-3 pl-4 border-l border-neutral-700">
                        <div className="text-right">
                            <p className="text-sm font-medium text-white">John Doe</p>
                            <p className="text-xs text-neutral-400 capitalize">{role}</p>
                        </div>
                        <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-neutral-300" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
