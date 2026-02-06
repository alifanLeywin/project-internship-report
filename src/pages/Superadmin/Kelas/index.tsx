import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';

interface Kelas {
    id: string;
    nama: string;
    jurusan: string;
    tingkat: string;
    waliKelas: string;
    jumlahSiswa: number;
    kapasitas: number;
}

export default function KelasIndex() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterJurusan, setFilterJurusan] = useState('all');

    const kelasList: Kelas[] = [
        { id: '1', nama: 'X RPL 1', jurusan: 'RPL', tingkat: 'X', waliKelas: 'Pak Budi', jumlahSiswa: 30, kapasitas: 36 },
        { id: '2', nama: 'X RPL 2', jurusan: 'RPL', tingkat: 'X', waliKelas: 'Bu Ani', jumlahSiswa: 32, kapasitas: 36 },
        { id: '3', nama: 'XI RPL 1', jurusan: 'RPL', tingkat: 'XI', waliKelas: 'Pak Dedi', jumlahSiswa: 35, kapasitas: 36 },
        { id: '4', nama: 'XI RPL 2', jurusan: 'RPL', tingkat: 'XI', waliKelas: 'Bu Siti', jumlahSiswa: 33, kapasitas: 36 },
        { id: '5', nama: 'XII RPL 1', jurusan: 'RPL', tingkat: 'XII', waliKelas: 'Pak Ahmad', jumlahSiswa: 28, kapasitas: 36 },
        { id: '6', nama: 'X TKJ 1', jurusan: 'TKJ', tingkat: 'X', waliKelas: 'Pak Rudi', jumlahSiswa: 34, kapasitas: 36 },
        { id: '7', nama: 'X TKJ 2', jurusan: 'TKJ', tingkat: 'X', waliKelas: 'Bu Maya', jumlahSiswa: 30, kapasitas: 36 },
        { id: '8', nama: 'X MM 1', jurusan: 'MM', tingkat: 'X', waliKelas: 'Pak Yoga', jumlahSiswa: 32, kapasitas: 36 },
    ];

    const jurusanColors: Record<string, string> = {
        RPL: 'bg-blue-950 text-blue-400 border-blue-800',
        TKJ: 'bg-green-950 text-green-400 border-green-800',
        MM: 'bg-purple-950 text-purple-400 border-purple-800',
        AKL: 'bg-orange-950 text-orange-400 border-orange-800',
        BDP: 'bg-pink-950 text-pink-400 border-pink-800',
    };

    const filteredKelas = kelasList.filter((kelas) => {
        const matchSearch =
            kelas.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
            kelas.waliKelas.toLowerCase().includes(searchQuery.toLowerCase());
        const matchJurusan = filterJurusan === 'all' || kelas.jurusan === filterJurusan;
        return matchSearch && matchJurusan;
    });

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Data Kelas" description="List kelas per jurusan">
                    <Link
                        to="/superadmin/kelas/create"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Tambah Kelas
                    </Link>
                </PageHeader>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                            type="text"
                            placeholder="Cari kelas atau wali kelas..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                        />
                    </div>
                    <select
                        value={filterJurusan}
                        onChange={(e) => setFilterJurusan(e.target.value)}
                        className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    >
                        <option value="all">Semua Jurusan</option>
                        <option value="RPL">RPL</option>
                        <option value="TKJ">TKJ</option>
                        <option value="MM">MM</option>
                        <option value="AKL">AKL</option>
                        <option value="BDP">BDP</option>
                    </select>
                </div>

                {/* Table */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-neutral-800">
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">Nama Kelas</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">Jurusan</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 hidden sm:table-cell">Tingkat</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 hidden md:table-cell">Wali Kelas</th>
                                    <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">Siswa</th>
                                    <th className="px-4 py-3 text-xs font-medium text-neutral-500">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredKelas.map((kelas) => (
                                    <tr key={kelas.id} className="border-b border-neutral-800 hover:bg-neutral-800/50">
                                        <td className="px-4 py-3 text-sm text-white font-medium">{kelas.nama}</td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex px-2 py-0.5 text-xs rounded border ${jurusanColors[kelas.jurusan] || 'bg-neutral-800 text-neutral-400 border-neutral-700'}`}>
                                                {kelas.jurusan}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-neutral-400 hidden sm:table-cell">{kelas.tingkat}</td>
                                        <td className="px-4 py-3 text-sm text-neutral-400 hidden md:table-cell">{kelas.waliKelas}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-white">{kelas.jumlahSiswa}</span>
                                                <span className="text-xs text-neutral-500">/ {kelas.kapasitas}</span>
                                                <div className="w-16 h-1.5 bg-neutral-800 rounded-full overflow-hidden hidden sm:block">
                                                    <div
                                                        className="h-full bg-green-500 rounded-full"
                                                        style={{ width: `${(kelas.jumlahSiswa / kelas.kapasitas) * 100}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-1">
                                                <Link
                                                    to={`/superadmin/kelas/${kelas.id}/edit`}
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
