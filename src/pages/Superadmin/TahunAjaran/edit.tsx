import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { TahunAjaranForm } from './_form';

export default function TahunAjaranEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const existingData = {
        tahun: '2025/2026',
        semester: 'Ganjil' as const,
        tanggalMulai: '2025-07-14',
        tanggalSelesai: '2025-12-20',
        status: 'active' as const,
    };

    const handleSubmit = async (data: any) => {
        setIsLoading(true);
        console.log('Updating tahun ajaran:', id, data);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/superadmin/tahun-ajaran');
        }, 1000);
    };

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Edit Tahun Ajaran" description={`Edit ${existingData.tahun} - ${existingData.semester}`} />

                <div className="max-w-2xl">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <TahunAjaranForm initialData={existingData} onSubmit={handleSubmit} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
