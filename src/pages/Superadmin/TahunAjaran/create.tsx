import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { TahunAjaranForm } from './_form';

export default function TahunAjaranCreate() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (data: any) => {
        setIsLoading(true);
        console.log('Creating tahun ajaran:', data);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/superadmin/tahun-ajaran');
        }, 1000);
    };

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Tambah Tahun Ajaran" description="Tambah tahun ajaran baru" />

                <div className="max-w-2xl">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <TahunAjaranForm onSubmit={handleSubmit} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
