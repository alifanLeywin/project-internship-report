import { type ReactNode } from 'react';

interface PageHeaderProps {
    title: string;
    description?: string;
    children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                {description && (
                    <p className="text-sm text-neutral-400 mt-1">{description}</p>
                )}
            </div>
            {children}
        </div>
    );
}
