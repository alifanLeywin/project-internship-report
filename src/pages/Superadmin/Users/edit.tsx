import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { PageHeader } from '../../../components/Common';
import { UserForm } from './_form';

export default function UsersEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const existingData = {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin' as const,
        status: 'active' as const,
    };

    const handleSubmit = async (data: any) => {
        setIsLoading(true);
        console.log('Updating user:', id, data);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/superadmin/users');
        }, 1000);
    };

    return (
        <DashboardLayout role="superadmin">
            <div className="space-y-6">
                <PageHeader title="Edit Pengguna" description={`Edit ${existingData.name}`} />

                <div className="max-w-xl">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                        <UserForm initialData={existingData} onSubmit={handleSubmit} isLoading={isLoading} isEdit />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
