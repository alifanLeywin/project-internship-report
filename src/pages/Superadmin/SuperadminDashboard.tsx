import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Users, Building2, BarChart3, Shield } from 'lucide-react';

export default function SuperadminDashboard() {
    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                {/* Page Header */}
                <div>
                    <h1 className="text-3xl font-bold text-white">Superadmin Dashboard</h1>
                    <p className="text-neutral-400 mt-2">
                        Manage all system users, admins, and platform settings
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Total Users"
                        value="1,234"
                        icon={Users}
                        change="+12%"
                        changeType="positive"
                    />
                    <StatCard
                        title="Active Admins"
                        value="24"
                        icon={Shield}
                        change="+3"
                        changeType="positive"
                    />
                    <StatCard
                        title="Companies"
                        value="156"
                        icon={Building2}
                        change="+8%"
                        changeType="positive"
                    />
                    <StatCard
                        title="System Health"
                        value="98.5%"
                        icon={BarChart3}
                        change="+0.5%"
                        changeType="positive"
                    />
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Activity */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
                        <div className="space-y-4">
                            <ActivityItem
                                action="New admin created"
                                user="John Doe"
                                time="2 hours ago"
                            />
                            <ActivityItem
                                action="Company verified"
                                user="Tech Corp"
                                time="5 hours ago"
                            />
                            <ActivityItem
                                action="System backup completed"
                                user="System"
                                time="1 day ago"
                            />
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            <button className="w-full px-4 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors">
                                Create New Admin
                            </button>
                            <button className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg font-medium hover:bg-neutral-700 transition-colors">
                                View All Users
                            </button>
                            <button className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg font-medium hover:bg-neutral-700 transition-colors">
                                System Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

// Helper Components
interface StatCardProps {
    title: string;
    value: string;
    icon: any;
    change: string;
    changeType: 'positive' | 'negative';
}

function StatCard({ title, value, icon: Icon, change, changeType }: StatCardProps) {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
                <span className="text-neutral-400 text-sm">{title}</span>
                <Icon className="w-5 h-5 text-neutral-500" />
            </div>
            <div className="flex items-end justify-between">
                <h3 className="text-3xl font-bold text-white">{value}</h3>
                <span
                    className={`text-sm font-medium ${changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                        }`}
                >
                    {change}
                </span>
            </div>
        </div>
    );
}

interface ActivityItemProps {
    action: string;
    user: string;
    time: string;
}

function ActivityItem({ action, user, time }: ActivityItemProps) {
    return (
        <div className="flex items-start gap-3 pb-4 border-b border-neutral-800 last:border-0 last:pb-0">
            <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
            <div className="flex-1">
                <p className="text-white text-sm">{action}</p>
                <p className="text-neutral-400 text-xs mt-1">
                    {user} • {time}
                </p>
            </div>
        </div>
    );
}
