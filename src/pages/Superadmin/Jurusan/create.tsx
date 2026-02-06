import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { JurusanForm } from './_form';

export default function JurusanCreate() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (data: any) => {
        setIsLoading(true);
        // TODO: API call to create jurusan
        console.log('Creating jurusan:', data);

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
                    title="Tambah Jurusan"
                    description="Tambah kompetensi keahlian baru"
                />

                <div className="max-w-xl">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <JurusanForm onSubmit={handleSubmit} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
