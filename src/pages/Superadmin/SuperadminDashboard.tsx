import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Users, GraduationCap, Building2, UserCog, Activity, Server, Clock } from 'lucide-react';

// Stats Card Component
function StatCard({ title, value, icon: Icon, color }: { title: string; value: string; icon: any; color: string }) {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-neutral-400">{title}</p>
                    <p className="text-2xl font-semibold text-white mt-1">{value}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
            </div>
        </div>
    );
}

// Activity Log Item
function ActivityItem({ action, user, time }: { action: string; user: string; time: string }) {
    return (
        <div className="flex items-start gap-3 py-3 border-b border-neutral-800 last:border-0">
            <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
            <div className="flex-1 min-w-0">
                <p className="text-sm text-white">{action}</p>
                <p className="text-xs text-neutral-500 mt-0.5">by {user}</p>
            </div>
            <span className="text-xs text-neutral-500 whitespace-nowrap">{time}</span>
        </div>
    );
}

export default function SuperadminDashboard() {
    const stats = [
        { title: 'Total Siswa', value: '1,234', icon: Users, color: 'bg-blue-600' },
        { title: 'Total Guru', value: '56', icon: GraduationCap, color: 'bg-green-600' },
        { title: 'Total Admin', value: '5', icon: UserCog, color: 'bg-purple-600' },
        { title: 'Total Perusahaan', value: '45', icon: Building2, color: 'bg-orange-600' },
    ];

    const activities = [
        { action: 'User baru ditambahkan: John Doe (Siswa)', user: 'Admin', time: '2 menit lalu' },
        { action: 'Data jurusan diupdate: RPL', user: 'Superadmin', time: '15 menit lalu' },
        { action: 'Backup database berhasil', user: 'System', time: '1 jam lalu' },
        { action: 'Login sukses dari IP 192.168.1.1', user: 'Admin', time: '2 jam lalu' },
        { action: 'Tahun ajaran baru ditambahkan: 2025/2026', user: 'Superadmin', time: '3 jam lalu' },
    ];

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                {/* Page Header */}
                <div>
                    <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
                    <p className="text-sm text-neutral-400 mt-1">Selamat datang di panel Superadmin</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Server Status */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Server className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-lg font-medium text-white">Status Server</h2>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-400">Database</span>
                                <span className="flex items-center gap-2 text-sm text-green-400">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    Online
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-400">API Server</span>
                                <span className="flex items-center gap-2 text-sm text-green-400">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    Online
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-400">Storage</span>
                                <span className="text-sm text-neutral-300">45% (4.5GB / 10GB)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-400">Last Backup</span>
                                <span className="text-sm text-neutral-300">1 jam lalu</span>
                            </div>
                        </div>
                    </div>

                    {/* Activity Log */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Activity className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-lg font-medium text-white">Log Aktivitas Terbaru</h2>
                        </div>
                        <div className="space-y-0">
                            {activities.map((activity, index) => (
                                <ActivityItem key={index} {...activity} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
