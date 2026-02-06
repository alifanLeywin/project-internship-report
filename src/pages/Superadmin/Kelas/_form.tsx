import { useState } from 'react';

interface KelasFormData {
    nama: string;
    jurusan: string;
    tingkat: string;
    waliKelas: string;
    kapasitas: number;
}

interface KelasFormProps {
    initialData?: KelasFormData;
    onSubmit: (data: KelasFormData) => void;
    isLoading?: boolean;
}

export function KelasForm({ initialData, onSubmit, isLoading }: KelasFormProps) {
    const [formData, setFormData] = useState<KelasFormData>(
        initialData || {
            nama: '',
            jurusan: '',
            tingkat: 'X',
            waliKelas: '',
            kapasitas: 36,
        }
    );

    const handleChange = (field: keyof KelasFormData, value: string | number) => {
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
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Nama Kelas</label>
                    <input
                        type="text"
                        value={formData.nama}
                        onChange={(e) => handleChange('nama', e.target.value)}
                        placeholder="Contoh: X RPL 1"
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Jurusan</label>
                    <select
                        value={formData.jurusan}
                        onChange={(e) => handleChange('jurusan', e.target.value)}
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                        required
                    >
                        <option value="">Pilih Jurusan</option>
                        <option value="RPL">RPL</option>
                        <option value="TKJ">TKJ</option>
                        <option value="MM">MM</option>
                        <option value="AKL">AKL</option>
                        <option value="BDP">BDP</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Tingkat</label>
                    <select
                        value={formData.tingkat}
                        onChange={(e) => handleChange('tingkat', e.target.value)}
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    >
                        <option value="X">X</option>
                        <option value="XI">XI</option>
                        <option value="XII">XII</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Kapasitas</label>
                    <input
                        type="number"
                        value={formData.kapasitas}
                        onChange={(e) => handleChange('kapasitas', parseInt(e.target.value))}
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Wali Kelas</label>
                <input
                    type="text"
                    value={formData.waliKelas}
                    onChange={(e) => handleChange('waliKelas', e.target.value)}
                    placeholder="Nama wali kelas"
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    required
                />
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
