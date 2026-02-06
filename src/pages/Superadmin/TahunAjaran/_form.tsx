import { useState } from 'react';

interface TahunAjaranFormData {
    tahun: string;
    semester: 'Ganjil' | 'Genap';
    tanggalMulai: string;
    tanggalSelesai: string;
    status: 'active' | 'archived';
}

interface TahunAjaranFormProps {
    initialData?: TahunAjaranFormData;
    onSubmit: (data: TahunAjaranFormData) => void;
    isLoading?: boolean;
}

export function TahunAjaranForm({ initialData, onSubmit, isLoading }: TahunAjaranFormProps) {
    const [formData, setFormData] = useState<TahunAjaranFormData>(
        initialData || {
            tahun: '',
            semester: 'Ganjil',
            tanggalMulai: '',
            tanggalSelesai: '',
            status: 'active',
        }
    );

    const handleChange = (field: keyof TahunAjaranFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                        Tahun Ajaran
                    </label>
                    <input
                        type="text"
                        value={formData.tahun}
                        onChange={(e) => handleChange('tahun', e.target.value)}
                        placeholder="Contoh: 2025/2026"
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                        Semester
                    </label>
                    <select
                        value={formData.semester}
                        onChange={(e) => handleChange('semester', e.target.value)}
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    >
                        <option value="Ganjil">Ganjil</option>
                        <option value="Genap">Genap</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                        Tanggal Mulai
                    </label>
                    <input
                        type="date"
                        value={formData.tanggalMulai}
                        onChange={(e) => handleChange('tanggalMulai', e.target.value)}
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                        Tanggal Selesai
                    </label>
                    <input
                        type="date"
                        value={formData.tanggalSelesai}
                        onChange={(e) => handleChange('tanggalSelesai', e.target.value)}
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                    Status
                </label>
                <select
                    value={formData.status}
                    onChange={(e) => handleChange('status', e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                >
                    <option value="active">Aktif</option>
                    <option value="archived">Arsip</option>
                </select>
            </div>

            <div className="flex justify-end gap-3 pt-4">
                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="px-4 py-2 text-sm text-neutral-400 hover:text-white border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                    Batal
                </button>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 text-sm bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50"
                >
                    {isLoading ? 'Menyimpan...' : 'Simpan'}
                </button>
            </div>
        </form>
    );
}
