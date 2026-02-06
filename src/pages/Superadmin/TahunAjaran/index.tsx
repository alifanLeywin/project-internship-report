import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { Plus, Edit, Trash2, Check, Calendar } from 'lucide-react';

interface TahunAjaran {
    id: string;
    tahun: string;
    semester: string;
    status: 'active' | 'archived';
    jumlahSiswa: number;
    tanggalMulai: string;
    tanggalSelesai: string;
}

export default function TahunAjaranIndex() {
    const tahunList: TahunAjaran[] = [
        { id: '1', tahun: '2025/2026', semester: 'Ganjil', status: 'active', jumlahSiswa: 1234, tanggalMulai: '2025-07-14', tanggalSelesai: '2025-12-20' },
        { id: '2', tahun: '2024/2025', semester: 'Genap', status: 'archived', jumlahSiswa: 1180, tanggalMulai: '2025-01-06', tanggalSelesai: '2025-06-20' },
        { id: '3', tahun: '2024/2025', semester: 'Ganjil', status: 'archived', jumlahSiswa: 1180, tanggalMulai: '2024-07-15', tanggalSelesai: '2024-12-21' },
        { id: '4', tahun: '2023/2024', semester: 'Genap', status: 'archived', jumlahSiswa: 1050, tanggalMulai: '2024-01-08', tanggalSelesai: '2024-06-15' },
    ];

    const activeTahun = tahunList.find((t) => t.status === 'active');

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Tahun Ajaran" description="Pengaturan tahun ajaran aktif dan arsip">
                    <Link
                        to="/superadmin/tahun-ajaran/create"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Tambah Tahun Ajaran
                    </Link>
                </PageHeader>

                {/* Active Year Highlight */}
                {activeTahun && (
                    <div className="bg-gradient-to-r from-green-950 to-neutral-900 border border-green-800 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-xl font-semibold text-white">
                                            {activeTahun.tahun} - {activeTahun.semester}
                                        </h2>
                                        <span className="px-2 py-0.5 text-xs bg-green-800 text-green-300 rounded">AKTIF</span>
                                    </div>
                                    <p className="text-sm text-neutral-400 mt-1">
                                        {activeTahun.tanggalMulai} - {activeTahun.tanggalSelesai} • {activeTahun.jumlahSiswa.toLocaleString()} siswa
                                    </p>
                                </div>
                            </div>
                            <Link
                                to={`/superadmin/tahun-ajaran/${activeTahun.id}/edit`}
                                className="px-3 py-1.5 text-sm text-neutral-400 hover:text-white border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors"
                            >
                                Edit
                            </Link>
                        </div>
                    </div>
                )}

                {/* Table */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                    <div className="px-4 py-3 border-b border-neutral-800">
                        <h3 className="text-sm font-medium text-white">Riwayat Tahun Ajaran</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-neutral-800">
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">Tahun Ajaran</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">Semester</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 hidden sm:table-cell">Periode</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 hidden md:table-cell">Jumlah Siswa</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">Status</th>
                                    <th className="px-4 py-3 text-xs font-medium text-neutral-500">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tahunList.map((tahun) => (
                                    <tr key={tahun.id} className="border-b border-neutral-800 hover:bg-neutral-800/50">
                                        <td className="px-4 py-3 text-sm text-white font-medium">{tahun.tahun}</td>
                                        <td className="px-4 py-3 text-sm text-neutral-400">{tahun.semester}</td>
                                        <td className="px-4 py-3 text-sm text-neutral-400 hidden sm:table-cell">
                                            {tahun.tanggalMulai} s/d {tahun.tanggalSelesai}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-neutral-400 hidden md:table-cell">{tahun.jumlahSiswa}</td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`inline-flex items-center px-2 py-0.5 text-xs rounded border ${tahun.status === 'active'
                                                        ? 'bg-green-950 text-green-400 border-green-800'
                                                        : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                                                    }`}
                                            >
                                                {tahun.status === 'active' ? 'Aktif' : 'Arsip'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-1">
                                                {tahun.status !== 'active' && (
                                                    <button
                                                        className="p-1.5 text-neutral-400 hover:text-green-400 hover:bg-green-950 rounded transition-colors"
                                                        title="Set Aktif"
                                                    >
                                                        <Check className="w-4 h-4" />
                                                    </button>
                                                )}
                                                <Link
                                                    to={`/superadmin/tahun-ajaran/${tahun.id}/edit`}
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
