import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { JurusanForm } from './_form';

export default function JurusanEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    // TODO: Fetch existing data from API
    const existingData = {
        kode: 'RPL',
        nama: 'Rekayasa Perangkat Lunak',
        kepala: 'Pak Budi',
        status: 'active' as const,
    };

    const handleSubmit = async (data: any) => {
        setIsLoading(true);
        // TODO: API call to update jurusan
        console.log('Updating jurusan:', id, data);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            navigate('/superadmin/jurusan');
        }, 1000);
    };

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader
                    title="Edit Jurusan"
                    description={`Edit data ${existingData.nama}`}
                />

                <div className="max-w-xl">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <JurusanForm
                            initialData={existingData}
                            onSubmit={handleSubmit}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
