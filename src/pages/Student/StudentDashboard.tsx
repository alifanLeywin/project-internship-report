import DashboardLayout from '../../components/Layout/DashboardLayout';
import { BookOpen, ClipboardList, Calendar, TrendingUp } from 'lucide-react';

export default function StudentDashboard() {
    return (
        <DashboardLayout role="student">
            <div className="space-y-6">
                {/* Page Header */}
                <div>
                    <h1 className="text-3xl font-bold text-white">Student Dashboard</h1>
                    <p className="text-neutral-400 mt-2">
                        Track your internship progress and manage your assignments
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Internship Progress"
                        value="75%"
                        icon={TrendingUp}
                        change="+5%"
                        changeType="positive"
                    />
                    <StatCard
                        title="Completed Tasks"
                        value="24"
                        icon={ClipboardList}
                        change="+3"
                        changeType="positive"
                    />
                    <StatCard
                        title="Pending Assignments"
                        value="5"
                        icon={BookOpen}
                        change="-2"
                        changeType="positive"
                    />
                    <StatCard
                        title="Days Remaining"
                        value="45"
                        icon={Calendar}
                        change="0"
                        changeType="positive"
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Current Internship */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Current Internship</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                                <span className="text-neutral-400 text-sm">Company</span>
                                <span className="text-white text-sm font-medium">Tech Innovations Ltd.</span>
                            </div>
                            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                                <span className="text-neutral-400 text-sm">Position</span>
                                <span className="text-white text-sm font-medium">Software Engineering Intern</span>
                            </div>
                            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                                <span className="text-neutral-400 text-sm">Supervisor</span>
                                <span className="text-white text-sm font-medium">John Doe</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-neutral-400 text-sm">Duration</span>
                                <span className="text-white text-sm font-medium">Jan 2026 - Apr 2026</span>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Deadlines */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Upcoming Deadlines</h2>
                        <div className="space-y-4">
                            <DeadlineItem
                                title="Weekly Report #9"
                                date="Feb 7, 2026"
                                priority="high"
                            />
                            <DeadlineItem
                                title="Project Milestone 2"
                                date="Feb 10, 2026"
                                priority="medium"
                            />
                            <DeadlineItem
                                title="Monthly Evaluation"
                                date="Feb 28, 2026"
                                priority="low"
                            />
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        <ActivityItem
                            action="Submitted Weekly Report #8"
                            time="2 hours ago"
                            status="completed"
                        />
                        <ActivityItem
                            action="Completed Task: Database Design"
                            time="1 day ago"
                            status="completed"
                        />
                        <ActivityItem
                            action="Received feedback on Project Milestone 1"
                            time="2 days ago"
                            status="info"
                        />
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

interface DeadlineItemProps {
    title: string;
    date: string;
    priority: 'high' | 'medium' | 'low';
}

function DeadlineItem({ title, date, priority }: DeadlineItemProps) {
    const priorityColors = {
        high: 'bg-red-950 text-red-400',
        medium: 'bg-yellow-950 text-yellow-400',
        low: 'bg-green-950 text-green-400',
    };

    return (
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 last:border-0 last:pb-0">
            <div>
                <p className="text-white text-sm font-medium">{title}</p>
                <p className="text-neutral-400 text-xs mt-1">{date}</p>
            </div>
            <span className={`px-2 py-1 text-xs rounded ${priorityColors[priority]}`}>
                {priority}
            </span>
        </div>
    );
}

interface ActivityItemProps {
    action: string;
    time: string;
    status: 'completed' | 'info';
}

function ActivityItem({ action, time, status }: ActivityItemProps) {
    return (
        <div className="flex items-start gap-3 pb-4 border-b border-neutral-800 last:border-0 last:pb-0">
            <div
                className={`w-2 h-2 rounded-full mt-2 ${status === 'completed' ? 'bg-green-400' : 'bg-blue-400'
                    }`}
            ></div>
            <div className="flex-1">
                <p className="text-white text-sm">{action}</p>
                <p className="text-neutral-400 text-xs mt-1">{time}</p>
            </div>
        </div>
    );
}
