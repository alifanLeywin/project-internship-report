import { TrendingUp, TrendingDown, ArrowUpRight, Users, DollarSign, Activity, CreditCard } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    description: string;
    subtitle?: string;
}

function StatCard({ title, value, change, trend, description, subtitle }: StatCardProps) {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-neutral-400">{title}</span>
                <span className={`flex items-center gap-1 text-xs ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {change}
                </span>
            </div>
            <div className="text-2xl font-semibold text-white mb-1">{value}</div>
            <div className="flex items-center gap-1 text-xs text-neutral-500">
                <span className={trend === 'up' ? 'text-green-400' : 'text-red-400'}>{description}</span>
                <ArrowUpRight className="w-3 h-3" />
            </div>
            {subtitle && <p className="text-xs text-neutral-500 mt-1">{subtitle}</p>}
        </div>
    );
}

export default function StatsGrid() {
    const stats: StatCardProps[] = [
        {
            title: 'Total Revenue',
            value: '$1,250.00',
            change: '+12.5%',
            trend: 'up',
            description: 'Trending up this month',
            subtitle: 'Visitors for the last 6 months',
        },
        {
            title: 'New Customers',
            value: '1,234',
            change: '-20%',
            trend: 'down',
            description: 'Down 20% this period',
            subtitle: 'Acquisition needs attention',
        },
        {
            title: 'Active Accounts',
            value: '45,678',
            change: '+12.5%',
            trend: 'up',
            description: 'Strong user retention',
            subtitle: 'Engagement exceed targets',
        },
        {
            title: 'Growth Rate',
            value: '4.5%',
            change: '+4.5%',
            trend: 'up',
            description: 'Steady performance increase',
            subtitle: 'Meets growth projections',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
}
