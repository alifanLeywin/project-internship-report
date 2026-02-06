import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { KelasForm } from './_form';

export default function KelasCreate() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (data: any) => {
        setIsLoading(true);
        console.log('Creating kelas:', data);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/superadmin/kelas');
        }, 1000);
    };

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Tambah Kelas" description="Tambah kelas baru" />

                <div className="max-w-2xl">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <KelasForm onSubmit={handleSubmit} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
