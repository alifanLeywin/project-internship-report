import { useState } from 'react';

interface UserFormData {
    name: string;
    email: string;
    role: 'admin' | 'teacher' | 'company' | 'student';
    status: 'active' | 'inactive';
    password?: string;
}

interface UserFormProps {
    initialData?: UserFormData;
    onSubmit: (data: UserFormData) => void;
    isLoading?: boolean;
    isEdit?: boolean;
}

export function UserForm({ initialData, onSubmit, isLoading, isEdit }: UserFormProps) {
    const [formData, setFormData] = useState<UserFormData>(
        initialData || {
            name: '',
            email: '',
            role: 'student',
            status: 'active',
            password: '',
        }
    );

    const handleChange = (field: keyof UserFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Nama Lengkap</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Nama lengkap"
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    required
                />
            </div>

            {!isEdit && (
                <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Password</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        placeholder="Password"
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                        required={!isEdit}
                    />
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Role</label>
                    <select
                        value={formData.role}
                        onChange={(e) => handleChange('role', e.target.value)}
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    >
                        <option value="admin">Admin</option>
                        <option value="teacher">Guru</option>
                        <option value="company">Perusahaan</option>
                        <option value="student">Siswa</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Status</label>
                    <select
                        value={formData.status}
                        onChange={(e) => handleChange('status', e.target.value)}
                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                    >
                        <option value="active">Aktif</option>
                        <option value="inactive">Nonaktif</option>
                    </select>
                </div>
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
