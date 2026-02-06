import DashboardLayout from '../../components/Layout/DashboardLayout';
import StatsGrid from '../../components/Dashboard/StatsGrid';
import ChartCard from '../../components/Dashboard/ChartCard';
import DataTable from '../../components/Dashboard/DataTable';

export default function StudentDashboard() {
    return (
        <DashboardLayout role="student">
            <div className="space-y-4">
                {/* Stats Grid */}
                <StatsGrid />

                {/* Chart */}
                <ChartCard
                    title="My Activity"
                    subtitle="Activity for the last 3 months"
                />

                {/* Data Table */}
                <DataTable />
            </div>
        </DashboardLayout>
    );
}
