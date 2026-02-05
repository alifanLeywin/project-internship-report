import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Users, ClipboardList, TrendingUp, Clock } from 'lucide-react';

export default function CompanyDashboard() {
    return (
        <DashboardLayout role="company">
            <div className="space-y-6">
                {/* Page Header */}
                <div>
                    <h1 className="text-3xl font-bold text-white">Company Dashboard</h1>
                    <p className="text-neutral-400 mt-2">
                        Manage your internship programs and track intern progress
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Active Interns"
                        value="42"
                        icon={Users}
                        change="+8"
                        changeType="positive"
                    />
                    <StatCard
                        title="Open Positions"
                        value="15"
                        icon={ClipboardList}
                        change="+3"
                        changeType="positive"
                    />
                    <StatCard
                        title="Applications"
                        value="128"
                        icon={TrendingUp}
                        change="+24%"
                        changeType="positive"
                    />
                    <StatCard
                        title="Pending Reviews"
                        value="7"
                        icon={Clock}
                        change="-2"
                        changeType="positive"
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Current Interns */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Current Interns</h2>
                        <div className="space-y-4">
                            <InternItem
                                name="Alice Johnson"
                                position="Software Engineering"
                                progress="85%"
                            />
                            <InternItem
                                name="Bob Williams"
                                position="Data Analytics"
                                progress="92%"
                            />
                            <InternItem
                                name="Carol Davis"
                                position="UX Design"
                                progress="78%"
                            />
                        </div>
                    </div>

                    {/* Recent Applications */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Recent Applications</h2>
                        <div className="space-y-4">
                            <ApplicationItem
                                name="David Brown"
                                position="Backend Developer"
                                date="2 hours ago"
                            />
                            <ApplicationItem
                                name="Emma Wilson"
                                position="Frontend Developer"
                                date="5 hours ago"
                            />
                            <ApplicationItem
                                name="Frank Miller"
                                position="DevOps Engineer"
                                date="1 day ago"
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

interface InternItemProps {
    name: string;
    position: string;
    progress: string;
}

function InternItem({ name, position, progress }: InternItemProps) {
    return (
        <div className="pb-4 border-b border-neutral-800 last:border-0 last:pb-0">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <p className="text-white text-sm font-medium">{name}</p>
                    <p className="text-neutral-400 text-xs mt-1">{position}</p>
                </div>
                <span className="text-sm font-medium text-green-400">{progress}</span>
            </div>
            <div className="w-full bg-neutral-800 rounded-full h-2">
                <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: progress }}
                ></div>
            </div>
        </div>
    );
}

interface ApplicationItemProps {
    name: string;
    position: string;
    date: string;
}

function ApplicationItem({ name, position, date }: ApplicationItemProps) {
    return (
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 last:border-0 last:pb-0">
            <div>
                <p className="text-white text-sm font-medium">{name}</p>
                <p className="text-neutral-400 text-xs mt-1">
                    {position} • {date}
                </p>
            </div>
            <button className="px-3 py-1 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">
                Review
            </button>
        </div>
    );
}
