import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { UserForm } from './_form';

export default function UsersCreate() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (data: any) => {
        setIsLoading(true);
        console.log('Creating user:', data);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/superadmin/users');
        }, 1000);
    };

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Tambah Pengguna" description="Tambah akun pengguna baru" />

                <div className="max-w-xl">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <UserForm onSubmit={handleSubmit} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
