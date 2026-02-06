import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { Search, Plus, Edit, Trash2, Eye } from 'lucide-react';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'teacher' | 'company' | 'student';
    status: 'active' | 'inactive';
    createdAt: string;
}

export default function UsersIndex() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterRole, setFilterRole] = useState('all');

    const users: User[] = [
        { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', createdAt: '2024-01-15' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'teacher', status: 'active', createdAt: '2024-01-20' },
        { id: '3', name: 'PT Teknologi Indonesia', email: 'hr@teknologi.id', role: 'company', status: 'active', createdAt: '2024-02-01' },
        { id: '4', name: 'Ahmad Fauzi', email: 'ahmad@student.com', role: 'student', status: 'active', createdAt: '2024-02-05' },
        { id: '5', name: 'Budi Santoso', email: 'budi@student.com', role: 'student', status: 'inactive', createdAt: '2024-02-10' },
    ];

    const getRoleStyle = (role: User['role']) => {
        switch (role) {
            case 'admin': return 'bg-purple-950 text-purple-400 border-purple-800';
            case 'teacher': return 'bg-blue-950 text-blue-400 border-blue-800';
            case 'company': return 'bg-orange-950 text-orange-400 border-orange-800';
            case 'student': return 'bg-green-950 text-green-400 border-green-800';
        }
    };

    const getStatusStyle = (status: User['status']) => {
        return status === 'active'
            ? 'bg-green-950 text-green-400 border-green-800'
            : 'bg-neutral-800 text-neutral-400 border-neutral-700';
    };

    const filteredUsers = users.filter((user) => {
        const matchSearch =
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchRole = filterRole === 'all' || user.role === filterRole;
        return matchSearch && matchRole;
    });

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Data Pengguna" description="Kelola semua akun pengguna sistem">
                    <Link
                        to="/superadmin/users/create"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Tambah User
                    </Link>
                </PageHeader>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                            type="text"
                            placeholder="Cari pengguna..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                        />
                    </div>
                    <select
                        value={filterRole}
                        onChange={(e) => setFilterRole(e.target.value)}
                        className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    >
                        <option value="all">Semua Role</option>
                        <option value="admin">Admin</option>
                        <option value="teacher">Guru</option>
                        <option value="company">Perusahaan</option>
                        <option value="student">Siswa</option>
                    </select>
                </div>

                {/* Table */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-neutral-800">
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">Nama</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 hidden sm:table-cell">Email</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">Role</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 hidden md:table-cell">Status</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 hidden lg:table-cell">Dibuat</th>
                                    <th className="px-4 py-3 text-xs font-medium text-neutral-500">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="border-b border-neutral-800 hover:bg-neutral-800/50">
                                        <td className="px-4 py-3 text-sm text-white">{user.name}</td>
                                        <td className="px-4 py-3 text-sm text-neutral-400 hidden sm:table-cell">{user.email}</td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex px-2 py-0.5 text-xs rounded border capitalize ${getRoleStyle(user.role)}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 hidden md:table-cell">
                                            <span className={`inline-flex items-center px-2 py-0.5 text-xs rounded border ${getStatusStyle(user.status)}`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
                                                {user.status === 'active' ? 'Aktif' : 'Nonaktif'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-neutral-400 hidden lg:table-cell">{user.createdAt}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-1">
                                                <Link
                                                    to={`/superadmin/users/${user.id}`}
                                                    className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </Link>
                                                <Link
                                                    to={`/superadmin/users/${user.id}/edit`}
                                                    className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </Link>
                                                <button className="p-1.5 text-neutral-400 hover:text-red-400 hover:bg-red-950 rounded transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
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
