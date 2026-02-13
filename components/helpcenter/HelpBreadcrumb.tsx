import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface HelpBreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function HelpBreadcrumb({ items }: HelpBreadcrumbProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-zlendo-grey-medium py-4 overflow-x-auto"
        >
            <Link
                href="/"
                className="flex items-center gap-1 hover:text-zlendo-teal transition-colors shrink-0"
            >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-40" />
            <Link
                href="/help-center"
                className="hover:text-zlendo-teal transition-colors shrink-0"
            >
                Help Center
            </Link>
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-1.5 shrink-0">
                    <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-zlendo-teal transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-zlendo-grey-dark font-semibold truncate max-w-[200px] md:max-w-[400px]">
                            {item.label}
                        </span>
                    )}
                </span>
            ))}
        </nav>
    );
}
