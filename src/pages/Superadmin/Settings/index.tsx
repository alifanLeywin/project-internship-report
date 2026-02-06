import { useState } from 'react';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { Save, Upload, Image } from 'lucide-react';

export default function SettingsIndex() {
    const [settings, setSettings] = useState({
        appName: 'InternHub',
        schoolName: 'SMK Negeri 1 Jakarta',
        address: 'Jl. Pendidikan No. 123, Jakarta Selatan',
        email: 'info@smkn1jkt.sch.id',
        phone: '021-12345678',
        website: 'https://smkn1jakarta.sch.id',
    });

    const handleChange = (field: string, value: string) => {
        setSettings((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Site Settings" description="Pengaturan umum aplikasi" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Settings Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* App Identity */}
                        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                            <h2 className="text-lg font-medium text-white mb-4">Identitas Aplikasi</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Nama Aplikasi</label>
                                    <input
                                        type="text"
                                        value={settings.appName}
                                        onChange={(e) => handleChange('appName', e.target.value)}
                                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Nama Sekolah</label>
                                    <input
                                        type="text"
                                        value={settings.schoolName}
                                        onChange={(e) => handleChange('schoolName', e.target.value)}
                                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Alamat</label>
                                    <textarea
                                        value={settings.address}
                                        onChange={(e) => handleChange('address', e.target.value)}
                                        rows={2}
                                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600 resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                            <h2 className="text-lg font-medium text-white mb-4">Informasi Kontak</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Email</label>
                                    <input
                                        type="email"
                                        value={settings.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Telepon</label>
                                    <input
                                        type="text"
                                        value={settings.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Website</label>
                                    <input
                                        type="url"
                                        value={settings.website}
                                        onChange={(e) => handleChange('website', e.target.value)}
                                        className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-neutral-600"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors">
                                <Save className="w-4 h-4" />
                                Simpan Perubahan
                            </button>
                        </div>
                    </div>

                    {/* Logo Section */}
                    <div className="space-y-4">
                        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                            <h2 className="text-lg font-medium text-white mb-4">Logo Sekolah</h2>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                                    <Image className="w-12 h-12 text-neutral-600" />
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 text-sm bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors">
                                    <Upload className="w-4 h-4" />
                                    Upload Logo
                                </button>
                                <p className="text-xs text-neutral-500 mt-2 text-center">PNG, JPG max 2MB</p>
                            </div>
                        </div>

                        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                            <h2 className="text-lg font-medium text-white mb-4">Favicon</h2>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                                    <Image className="w-8 h-8 text-neutral-600" />
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 text-sm bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors">
                                    <Upload className="w-4 h-4" />
                                    Upload Favicon
                                </button>
                                <p className="text-xs text-neutral-500 mt-2 text-center">ICO, PNG 32x32px</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
