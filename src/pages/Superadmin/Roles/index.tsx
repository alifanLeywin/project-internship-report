import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { Shield, Check, X, Edit } from 'lucide-react';

interface Role {
    id: string;
    name: string;
    description: string;
    permissions: string[];
    userCount: number;
}

export default function RolesIndex() {
    const roles: Role[] = [
        { id: '1', name: 'Super Admin', description: 'Akses penuh ke seluruh sistem', permissions: ['all'], userCount: 2 },
        { id: '2', name: 'Admin', description: 'Mengelola data operasional', permissions: ['manage_users', 'manage_internships', 'view_reports'], userCount: 5 },
        { id: '3', name: 'Guru Pembimbing', description: 'Membimbing dan menilai siswa', permissions: ['view_students', 'grade_reports', 'manage_assignments'], userCount: 56 },
        { id: '4', name: 'Perusahaan', description: 'Menerima dan menilai magang', permissions: ['view_interns', 'evaluate_interns', 'manage_positions'], userCount: 45 },
        { id: '5', name: 'Siswa', description: 'Peserta magang', permissions: ['view_internship', 'submit_reports', 'view_assignments'], userCount: 1234 },
    ];

    const allPermissions = [
        { key: 'manage_users', label: 'Kelola User' },
        { key: 'manage_internships', label: 'Kelola Magang' },
        { key: 'view_reports', label: 'Lihat Laporan' },
        { key: 'view_students', label: 'Lihat Siswa' },
        { key: 'grade_reports', label: 'Nilai Laporan' },
        { key: 'manage_assignments', label: 'Kelola Tugas' },
        { key: 'view_interns', label: 'Lihat Magang' },
        { key: 'evaluate_interns', label: 'Evaluasi Magang' },
        { key: 'manage_positions', label: 'Kelola Posisi' },
        { key: 'view_internship', label: 'Lihat Info Magang' },
        { key: 'submit_reports', label: 'Kirim Laporan' },
        { key: 'view_assignments', label: 'Lihat Tugas' },
    ];

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Role & Permissions" description="Atur hak akses untuk setiap role" />

                {/* Roles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {roles.map((role) => (
                        <div key={role.id} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-neutral-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">{role.name}</h3>
                                        <p className="text-xs text-neutral-500">{role.userCount} users</p>
                                    </div>
                                </div>
                                <button className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors">
                                    <Edit className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-sm text-neutral-400 mb-3">{role.description}</p>
                            <div className="flex flex-wrap gap-1">
                                {role.permissions.includes('all') ? (
                                    <span className="px-2 py-0.5 text-xs bg-green-950 text-green-400 border border-green-800 rounded">Full Access</span>
                                ) : (
                                    role.permissions.slice(0, 3).map((perm) => (
                                        <span key={perm} className="px-2 py-0.5 text-xs bg-neutral-800 text-neutral-400 rounded">
                                            {allPermissions.find((p) => p.key === perm)?.label || perm}
                                        </span>
                                    ))
                                )}
                                {role.permissions.length > 3 && !role.permissions.includes('all') && (
                                    <span className="px-2 py-0.5 text-xs bg-neutral-800 text-neutral-400 rounded">+{role.permissions.length - 3} lainnya</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Permissions Matrix */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                    <h2 className="text-lg font-medium text-white mb-4">Matriks Permission</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-neutral-800">
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">Permission</th>
                                    {roles.map((role) => (
                                        <th key={role.id} className="text-center px-4 py-3 text-xs font-medium text-neutral-500">{role.name}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {allPermissions.map((perm) => (
                                    <tr key={perm.key} className="border-b border-neutral-800">
                                        <td className="px-4 py-3 text-sm text-white">{perm.label}</td>
                                        {roles.map((role) => (
                                            <td key={role.id} className="px-4 py-3 text-center">
                                                {role.permissions.includes('all') || role.permissions.includes(perm.key) ? (
                                                    <Check className="w-4 h-4 text-green-500 mx-auto" />
                                                ) : (
                                                    <X className="w-4 h-4 text-neutral-600 mx-auto" />
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
