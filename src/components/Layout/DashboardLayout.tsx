import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import type { UserRole } from '../../config/sidebarConfig';

interface DashboardLayoutProps {
    role: UserRole;
    children: ReactNode;
}

export default function DashboardLayout({ role, children }: DashboardLayoutProps) {
    return (
        <div className="flex min-h-screen bg-black">
            {/* Sidebar */}
            <Sidebar role={role} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Header role={role} />

                {/* Page Content */}
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
