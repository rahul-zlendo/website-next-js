import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BlogBreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function BlogBreadcrumb({ items }: BlogBreadcrumbProps) {
    return (
        <nav className="flex items-center gap-2 text-sm overflow-x-auto no-scrollbar" aria-label="Breadcrumb">
            <Link
                href="/"
                className="flex items-center gap-1.5 text-zlendo-grey-medium hover:text-zlendo-teal transition-colors shrink-0"
            >
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 shrink-0">
                    <ChevronRight className="w-4 h-4 text-zlendo-grey-medium/40" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-zlendo-grey-medium hover:text-zlendo-teal transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-zlendo-grey-dark font-semibold line-clamp-1">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
