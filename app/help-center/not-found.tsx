'use client';

import Link from 'next/link';
import { FileQuestion } from 'lucide-react';
import { CountryProvider } from '@/lib/context/CountryContext';

export default function HelpCenterNotFound() {
    return (
        <CountryProvider initialCountry="in">
            <div className="min-h-screen flex flex-col bg-[#fafbfc]">
                <main className="flex-grow flex items-center justify-center py-20">
                    <div className="text-center max-w-lg mx-auto px-6">
                        <div className="w-20 h-20 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center mx-auto mb-6">
                            <FileQuestion className="w-10 h-10 text-zlendo-teal" />
                        </div>

                        <h1 className="text-3xl font-nunito font-black text-zlendo-grey-dark mb-3">
                            Article Not Found
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
                </main>
            </div>
        </CountryProvider>
    );
}
