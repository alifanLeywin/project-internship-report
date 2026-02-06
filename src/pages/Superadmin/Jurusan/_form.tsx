import { useState } from 'react';

interface JurusanFormData {
    kode: string;
    nama: string;
    kepala: string;
    status: 'active' | 'inactive';
}

interface JurusanFormProps {
    initialData?: JurusanFormData;
    onSubmit: (data: JurusanFormData) => void;
    isLoading?: boolean;
}

export function JurusanForm({ initialData, onSubmit, isLoading }: JurusanFormProps) {
    const [formData, setFormData] = useState<JurusanFormData>(
        initialData || {
            kode: '',
            nama: '',
            kepala: '',
            status: 'active',
        }
    );

    const handleChange = (field: keyof JurusanFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                    Kode Jurusan
                </label>
                <input
                    type="text"
                    value={formData.kode}
                    onChange={(e) => handleChange('kode', e.target.value)}
                    placeholder="Contoh: RPL"
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                    Nama Jurusan
                </label>
                <input
                    type="text"
                    value={formData.nama}
                    onChange={(e) => handleChange('nama', e.target.value)}
                    placeholder="Contoh: Rekayasa Perangkat Lunak"
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                    Kepala Jurusan
                </label>
                <input
                    type="text"
                    value={formData.kepala}
                    onChange={(e) => handleChange('kepala', e.target.value)}
                    placeholder="Nama Kepala Jurusan"
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    required
                />
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
                    <option value="inactive">Nonaktif</option>
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
