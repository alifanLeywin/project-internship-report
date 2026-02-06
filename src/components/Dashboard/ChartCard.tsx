import { useState } from 'react';

interface ChartCardProps {
    title: string;
    subtitle: string;
}

export default function ChartCard({ title, subtitle }: ChartCardProps) {
    const [activeRange, setActiveRange] = useState('Last 3 months');
    const ranges = ['Last 3 months', 'Last 30 days', 'Last 7 days'];

    // Generate chart data points for area chart visualization
    const dataPoints = [
        30, 45, 35, 50, 40, 55, 45, 60, 50, 65, 55, 70,
        60, 75, 65, 80, 70, 85, 75, 70, 65, 75, 70, 80,
        75, 85, 80, 90, 85, 80
    ];

    const maxValue = Math.max(...dataPoints);
    const minY = 20;
    const maxY = 100;

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                    <h3 className="text-white font-medium">{title}</h3>
                    <p className="text-sm text-neutral-500">{subtitle}</p>
                </div>

                {/* Time Range Tabs */}
                <div className="flex bg-neutral-800 rounded-md p-0.5">
                    {ranges.map((range) => (
                        <button
                            key={range}
                            onClick={() => setActiveRange(range)}
                            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${activeRange === range
                                    ? 'bg-neutral-700 text-white'
                                    : 'text-neutral-400 hover:text-white'
                                }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart Area */}
            <div className="h-48 relative">
                {/* SVG Area Chart */}
                <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <path
                        d={`
              M 0 ${200 - (dataPoints[0] / maxValue) * 180}
              ${dataPoints.map((point, i) => {
                            const x = (i / (dataPoints.length - 1)) * 600;
                            const y = 200 - (point / maxValue) * 180;
                            return `L ${x} ${y}`;
                        }).join(' ')}
              L 600 200 L 0 200 Z
            `}
                        fill="url(#chartGradient)"
                    />

                    {/* Line */}
                    <path
                        d={`
              M 0 ${200 - (dataPoints[0] / maxValue) * 180}
              ${dataPoints.map((point, i) => {
                            const x = (i / (dataPoints.length - 1)) * 600;
                            const y = 200 - (point / maxValue) * 180;
                            return `L ${x} ${y}`;
                        }).join(' ')}
            `}
                        fill="none"
                        stroke="rgba(255,255,255,0.8)"
                        strokeWidth="2"
                    />
                </svg>

                {/* X-Axis Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-neutral-500 pt-2">
                    <span>Apr 3</span>
                    <span className="hidden sm:inline">Apr 15</span>
                    <span className="hidden md:inline">May 3</span>
                    <span className="hidden sm:inline">May 22</span>
                    <span className="hidden md:inline">Jun 10</span>
                    <span>Jun 30</span>
                </div>
            </div>
        </div>
    );
}
