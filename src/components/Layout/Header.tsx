import { Bell, Menu, ExternalLink, FileText } from 'lucide-react';
import type { UserRole } from '../../config/sidebarConfig';

interface HeaderProps {
    role: UserRole;
    onMenuClick: () => void;
}

export default function Header({ role, onMenuClick }: HeaderProps) {
    // Get page title based on role
    const pageTitle = role.charAt(0).toUpperCase() + role.slice(1) + ' Dashboard';

    return (
        <header className="bg-neutral-950 border-b border-neutral-800 px-4 py-3">
            <div className="flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center gap-3">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-md transition-colors"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm">
                        <FileText className="w-4 h-4 text-neutral-400" />
                        <span className="text-white font-medium">{pageTitle}</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2">
                    {/* GitHub Link */}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                        GitHub
                        <ExternalLink className="w-3 h-3" />
                    </a>

                    {/* Notifications */}
                    <button className="relative p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-md transition-colors">
                        <Bell className="w-4 h-4" />
                        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
