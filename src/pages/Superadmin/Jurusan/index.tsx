import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';

interface Jurusan {
    id: string;
    kode: string;
    nama: string;
    kepala: string;
    jumlahKelas: number;
    jumlahSiswa: number;
    status: 'active' | 'inactive';
}

export default function JurusanIndex() {
    const [searchQuery, setSearchQuery] = useState('');

    const jurusanList: Jurusan[] = [
        { id: '1', kode: 'RPL', nama: 'Rekayasa Perangkat Lunak', kepala: 'Pak Budi', jumlahKelas: 6, jumlahSiswa: 180, status: 'active' },
        { id: '2', kode: 'TKJ', nama: 'Teknik Komputer & Jaringan', kepala: 'Pak Ahmad', jumlahKelas: 4, jumlahSiswa: 120, status: 'active' },
        { id: '3', kode: 'MM', nama: 'Multimedia', kepala: 'Bu Siti', jumlahKelas: 4, jumlahSiswa: 120, status: 'active' },
        { id: '4', kode: 'AKL', nama: 'Akuntansi & Keuangan Lembaga', kepala: 'Bu Ani', jumlahKelas: 6, jumlahSiswa: 180, status: 'active' },
        { id: '5', kode: 'BDP', nama: 'Bisnis Daring & Pemasaran', kepala: 'Pak Dedi', jumlahKelas: 2, jumlahSiswa: 60, status: 'inactive' },
    ];

    const filteredList = jurusanList.filter(
        (j) =>
            j.kode.toLowerCase().includes(searchQuery.toLowerCase()) ||
            j.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Data Jurusan" description="Kelola kompetensi keahlian">
                    <Link
                        to="/superadmin/jurusan/create"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Tambah Jurusan
                    </Link>
                </PageHeader>

                {/* Search */}
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                        type="text"
                        placeholder="Cari jurusan..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    />
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredList.map((jurusan) => (
                        <div key={jurusan.id} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">{jurusan.kode}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">{jurusan.nama}</h3>
                                        <p className="text-xs text-neutral-500">Kepala: {jurusan.kepala}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="bg-neutral-800 rounded-lg p-3 text-center">
                                    <p className="text-lg font-semibold text-white">{jurusan.jumlahKelas}</p>
                                    <p className="text-xs text-neutral-500">Kelas</p>
                                </div>
                                <div className="bg-neutral-800 rounded-lg p-3 text-center">
                                    <p className="text-lg font-semibold text-white">{jurusan.jumlahSiswa}</p>
                                    <p className="text-xs text-neutral-500">Siswa</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span
                                    className={`inline-flex items-center px-2 py-0.5 text-xs rounded border ${jurusan.status === 'active'
                                            ? 'bg-green-950 text-green-400 border-green-800'
                                            : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                                        }`}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
                                    {jurusan.status === 'active' ? 'Aktif' : 'Nonaktif'}
                                </span>
                                <div className="flex items-center gap-1">
                                    <Link
                                        to={`/superadmin/jurusan/${jurusan.id}/edit`}
                                        className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </Link>
                                    <button className="p-1.5 text-neutral-400 hover:text-red-400 hover:bg-red-950 rounded transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
