'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
    if (totalPages <= 1) return null;

    // Generate page numbers to show
    const getPageNumbers = (): (number | 'ellipsis')[] => {
        const pages: (number | 'ellipsis')[] = [];
        const showEllipsis = totalPages > 7;

        if (!showEllipsis) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            if (currentPage > 3) {
                pages.push('ellipsis');
            }

            // Pages around current
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push('ellipsis');
            }

            // Always show last page
            pages.push(totalPages);
        }

        return pages;
    };

    const getPageUrl = (page: number): string => {
        if (page === 1) return basePath;
        return `${basePath}?page=${page}`;
    };

    const pageNumbers = getPageNumbers();

    return (
        <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
            {/* Previous Button */}
            {currentPage > 1 ? (
                <Link
                    href={getPageUrl(currentPage - 1)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-black/10 text-zlendo-grey-dark font-semibold text-sm hover:bg-zlendo-teal hover:text-white hover:border-zlendo-teal transition-all group"
                >
                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                    Previous
                </Link>
            ) : (
                <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 text-gray-300 font-semibold text-sm cursor-not-allowed">
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                </span>
            )}

            {/* Page Numbers */}
            <div className="hidden sm:flex items-center gap-1">
                {pageNumbers.map((page, index) => {
                    if (page === 'ellipsis') {
                        return (
                            <span key={`ellipsis-${index}`} className="w-10 h-10 flex items-center justify-center text-zlendo-grey-medium">
                                <MoreHorizontal className="w-4 h-4" />
                            </span>
                        );
                    }

                    const isActive = page === currentPage;

                    return (
                        <Link
                            key={page}
                            href={getPageUrl(page)}
                            className={`w-10 h-10 flex items-center justify-center rounded-xl font-semibold text-sm transition-all ${isActive
                                    ? 'bg-zlendo-teal text-white shadow-lg shadow-zlendo-teal/30'
                                    : 'bg-white border border-black/10 text-zlendo-grey-dark hover:bg-zlendo-teal/5 hover:border-zlendo-teal/20'
                                }`}
                        >
                            {page}
                        </Link>
                    );
                })}
            </div>

            {/* Mobile Page Indicator */}
            <span className="sm:hidden px-4 py-2 text-sm text-zlendo-grey-medium">
                Page {currentPage} of {totalPages}
            </span>

            {/* Next Button */}
            {currentPage < totalPages ? (
                <Link
                    href={getPageUrl(currentPage + 1)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-black/10 text-zlendo-grey-dark font-semibold text-sm hover:bg-zlendo-teal hover:text-white hover:border-zlendo-teal transition-all group"
                >
                    Next
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
            ) : (
                <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 text-gray-300 font-semibold text-sm cursor-not-allowed">
                    Next
                    <ChevronRight className="w-4 h-4" />
                </span>
            )}
        </nav>
    );
}
