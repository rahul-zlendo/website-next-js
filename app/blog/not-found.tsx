'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';
import { CountryProvider } from '@/lib/context/CountryContext';

export default function BlogNotFound() {
    return (
        <CountryProvider initialCountry="in">
            <div className="min-h-screen flex flex-col bg-white">
                <main className="flex-grow flex items-center justify-center py-20">
                    <div className="container-custom px-6 lg:px-12 text-center">
                        <div className="max-w-lg mx-auto">
                            {/* 404 Illustration */}
                            <div className="relative mb-8">
                                <div className="text-[120px] md:text-[180px] font-black text-zlendo-teal/5 leading-none select-none">
                                    404
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-zlendo-teal/10 flex items-center justify-center">
                                        <Search className="w-12 h-12 md:w-16 md:h-16 text-zlendo-teal" />
                                    </div>
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-nunito font-black text-zlendo-grey-dark mb-4">
                                Blog Post Not Found
                            </h1>

                            <p className="text-lg text-zlendo-grey-medium mb-8">
                                The page you&apos;re looking for doesn&apos;t exist or has been moved.
                            </p>

                            <div className="flex justify-center">
                                <Link
                                    href="/in"
                                    className="inline-flex items-center gap-2 px-10 py-4 bg-zlendo-teal text-white font-bold rounded-full shadow-lg shadow-zlendo-teal/30 hover:scale-105 transition-all"
                                >
                                    Go to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </CountryProvider>
    );
}
