import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Building2, Users, GraduationCap, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <DashboardLayout role="admin">
            <div className="space-y-6">
                {/* Page Header */}
                <div>
                    <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                    <p className="text-neutral-400 mt-2">
                        Manage companies, teachers, students, and internship programs
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Total Companies"
                        value="156"
                        icon={Building2}
                        change="+8%"
                        changeType="positive"
                    />
                    <StatCard
                        title="Teachers"
                        value="89"
                        icon={GraduationCap}
                        change="+5"
                        changeType="positive"
                    />
                    <StatCard
                        title="Students"
                        value="542"
                        icon={Users}
                        change="+15%"
                        changeType="positive"
                    />
                    <StatCard
                        title="Active Internships"
                        value="234"
                        icon={TrendingUp}
                        change="+12%"
                        changeType="positive"
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Pending Approvals */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Pending Approvals</h2>
                        <div className="space-y-4">
                            <ApprovalItem
                                title="New Company Registration"
                                name="Tech Innovations Ltd."
                                type="Company"
                            />
                            <ApprovalItem
                                title="Internship Request"
                                name="John Doe - Software Eng."
                                type="Student"
                            />
                            <ApprovalItem
                                title="Teacher Account"
                                name="Jane Smith"
                                type="Teacher"
                            />
                        </div>
                    </div>

                    {/* Recent Reports */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Recent Reports</h2>
                        <div className="space-y-4">
                            <ReportItem
                                title="Monthly Internship Report"
                                date="Feb 2026"
                                status="Completed"
                            />
                            <ReportItem
                                title="Company Performance Review"
                                date="Jan 2026"
                                status="In Progress"
                            />
                            <ReportItem
                                title="Student Placement Stats"
                                date="Dec 2025"
                                status="Completed"
                            />
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

interface ApprovalItemProps {
    title: string;
    name: string;
    type: string;
}

function ApprovalItem({ title, name, type }: ApprovalItemProps) {
    return (
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 last:border-0 last:pb-0">
            <div>
                <p className="text-white text-sm font-medium">{title}</p>
                <p className="text-neutral-400 text-xs mt-1">
                    {name} • {type}
                </p>
            </div>
            <button className="px-3 py-1 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">
                Review
            </button>
        </div>
    );
}

interface ReportItemProps {
    title: string;
    date: string;
    status: string;
}

function ReportItem({ title, date, status }: ReportItemProps) {
    return (
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 last:border-0 last:pb-0">
            <div>
                <p className="text-white text-sm font-medium">{title}</p>
                <p className="text-neutral-400 text-xs mt-1">{date}</p>
            </div>
            <span
                className={`px-2 py-1 text-xs rounded ${status === 'Completed'
                        ? 'bg-green-950 text-green-400'
                        : 'bg-yellow-950 text-yellow-400'
                    }`}
            >
                {status}
            </span>
        </div>
    );
}
