import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Users, ClipboardList, CheckCircle, AlertCircle } from 'lucide-react';

export default function TeacherDashboard() {
    return (
        <DashboardLayout role="teacher">
            <div className="space-y-6">
                {/* Page Header */}
                <div>
                    <h1 className="text-3xl font-bold text-white">Teacher Dashboard</h1>
                    <p className="text-neutral-400 mt-2">
                        Monitor your students and manage their internship assignments
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Total Students"
                        value="45"
                        icon={Users}
                        change="+3"
                        changeType="positive"
                    />
                    <StatCard
                        title="Active Internships"
                        value="38"
                        icon={CheckCircle}
                        change="+5"
                        changeType="positive"
                    />
                    <StatCard
                        title="Pending Assignments"
                        value="12"
                        icon={ClipboardList}
                        change="-4"
                        changeType="positive"
                    />
                    <StatCard
                        title="Need Attention"
                        value="3"
                        icon={AlertCircle}
                        change="+1"
                        changeType="negative"
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Student Progress */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Student Progress</h2>
                        <div className="space-y-4">
                            <StudentItem
                                name="Alice Johnson"
                                company="Tech Corp"
                                progress="90%"
                                status="excellent"
                            />
                            <StudentItem
                                name="Bob Williams"
                                company="Data Inc."
                                progress="75%"
                                status="good"
                            />
                            <StudentItem
                                name="Carol Davis"
                                company="Design Studio"
                                progress="45%"
                                status="needs-attention"
                            />
                        </div>
                    </div>

                    {/* Recent Submissions */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Recent Submissions</h2>
                        <div className="space-y-4">
                            <SubmissionItem
                                student="David Brown"
                                assignment="Weekly Report #8"
                                time="2 hours ago"
                            />
                            <SubmissionItem
                                student="Emma Wilson"
                                assignment="Project Documentation"
                                time="5 hours ago"
                            />
                            <SubmissionItem
                                student="Frank Miller"
                                assignment="Weekly Report #7"
                                time="1 day ago"
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

interface StudentItemProps {
    name: string;
    company: string;
    progress: string;
    status: 'excellent' | 'good' | 'needs-attention';
}

function StudentItem({ name, company, progress, status }: StudentItemProps) {
    const statusColors = {
        excellent: 'text-green-400 bg-green-950',
        good: 'text-blue-400 bg-blue-950',
        'needs-attention': 'text-red-400 bg-red-950',
    };

    return (
        <div className="pb-4 border-b border-neutral-800 last:border-0 last:pb-0">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <p className="text-white text-sm font-medium">{name}</p>
                    <p className="text-neutral-400 text-xs mt-1">{company}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded ${statusColors[status]}`}>
                    {progress}
                </span>
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

interface SubmissionItemProps {
    student: string;
    assignment: string;
    time: string;
}

function SubmissionItem({ student, assignment, time }: SubmissionItemProps) {
    return (
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 last:border-0 last:pb-0">
            <div>
                <p className="text-white text-sm font-medium">{assignment}</p>
                <p className="text-neutral-400 text-xs mt-1">
                    {student} • {time}
                </p>
            </div>
            <button className="px-3 py-1 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">
                Review
            </button>
        </div>
    );
}
