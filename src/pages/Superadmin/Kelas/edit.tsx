import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { KelasForm } from './_form';

export default function KelasEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const existingData = {
        nama: 'X RPL 1',
        jurusan: 'RPL',
        tingkat: 'X',
        waliKelas: 'Pak Budi',
        kapasitas: 36,
    };

    const handleSubmit = async (data: any) => {
        setIsLoading(true);
        console.log('Updating kelas:', id, data);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/superadmin/kelas');
        }, 1000);
    };

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Edit Kelas" description={`Edit ${existingData.nama}`} />

                <div className="max-w-2xl">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <KelasForm initialData={existingData} onSubmit={handleSubmit} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
