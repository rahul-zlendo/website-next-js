'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CountryProvider } from '@/lib/context/CountryContext';

export default function NotFound() {
  return (
    <CountryProvider initialCountry="in">
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center px-6">
            <div className="relative mb-8">
              <h1 className="text-[150px] font-black text-zlendo-teal/10 leading-none select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl md:text-5xl font-nunito font-black text-zlendo-grey-dark">
                  Page Not Found
                </h2>
              </div>
            </div>

            <p className="text-lg text-zlendo-grey-medium mb-8 max-w-lg mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            <div className="flex justify-center">
              <Link
                href="/in"
                className="px-10 py-4 bg-zlendo-teal text-white font-bold rounded-full shadow-lg shadow-zlendo-teal/30 hover:scale-105 transition-all"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </CountryProvider>
  );
}
