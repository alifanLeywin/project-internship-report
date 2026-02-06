import { useState } from 'react';
import { MoreVertical, Plus, Settings } from 'lucide-react';

interface TableRow {
    id: string;
    header: string;
    sectionType: string;
    status: 'In Process' | 'Done' | 'Pending';
    target: number;
    limit: number;
    reviewer: string;
}

interface DataTableProps {
    title?: string;
}

export default function DataTable({ title = 'Documents' }: DataTableProps) {
    const [activeTab, setActiveTab] = useState('Outline');
    const tabs = [
        { label: 'Outline', count: null },
        { label: 'Past Performance', count: 3 },
        { label: 'Key Personnel', count: 2 },
        { label: 'Focus Documents', count: null },
    ];

    const data: TableRow[] = [
        { id: '1', header: 'Cover page', sectionType: 'Cover page', status: 'In Process', target: 18, limit: 5, reviewer: 'Eddie Lake' },
        { id: '2', header: 'Table of contents', sectionType: 'Table of contents', status: 'Done', target: 29, limit: 24, reviewer: 'Eddie Lake' },
        { id: '3', header: 'Executive summary', sectionType: 'Narrative', status: 'Done', target: 10, limit: 13, reviewer: 'Eddie Lake' },
    ];

    const getStatusStyle = (status: TableRow['status']) => {
        switch (status) {
            case 'Done':
                return 'bg-green-950 text-green-400 border-green-800';
            case 'In Process':
                return 'bg-yellow-950 text-yellow-400 border-yellow-800';
            case 'Pending':
                return 'bg-neutral-800 text-neutral-400 border-neutral-700';
        }
    };

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg">
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 border-b border-neutral-800">
                <div className="flex items-center gap-1 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md whitespace-nowrap transition-colors ${activeTab === tab.label
                                    ? 'bg-neutral-800 text-white'
                                    : 'text-neutral-400 hover:text-white'
                                }`}
                        >
                            {tab.label}
                            {tab.count && (
                                <span className="px-1.5 py-0.5 text-xs bg-neutral-700 rounded">
                                    {tab.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-400 hover:text-white border border-neutral-700 rounded-md transition-colors">
                        <Settings className="w-4 h-4" />
                        Customize Columns
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white text-black rounded-md hover:bg-neutral-200 transition-colors">
                        <Plus className="w-4 h-4" />
                        Add Section
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-neutral-800">
                            <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">
                                <input type="checkbox" className="rounded border-neutral-700 bg-neutral-800" />
                            </th>
                            <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">Header</th>
                            <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 hidden sm:table-cell">Section Type</th>
                            <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500">Status</th>
                            <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 hidden md:table-cell">Target</th>
                            <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 hidden md:table-cell">Limit</th>
                            <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 hidden lg:table-cell">Reviewer</th>
                            <th className="px-4 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id} className="border-b border-neutral-800 hover:bg-neutral-800/50">
                                <td className="px-4 py-3">
                                    <input type="checkbox" className="rounded border-neutral-700 bg-neutral-800" />
                                </td>
                                <td className="px-4 py-3 text-sm text-white">{row.header}</td>
                                <td className="px-4 py-3 text-sm text-neutral-400 hidden sm:table-cell">{row.sectionType}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center px-2 py-0.5 text-xs rounded border ${getStatusStyle(row.status)}`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm text-neutral-400 hidden md:table-cell">{row.target}</td>
                                <td className="px-4 py-3 text-sm text-neutral-400 hidden md:table-cell">{row.limit}</td>
                                <td className="px-4 py-3 text-sm text-neutral-400 hidden lg:table-cell">{row.reviewer}</td>
                                <td className="px-4 py-3">
                                    <button className="p-1 text-neutral-500 hover:text-white rounded transition-colors">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
