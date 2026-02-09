import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function BlogNotFound() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center py-20">
            <div className="container-custom px-6 lg:px-12 text-center">
                <div className="max-w-lg mx-auto">
                    {/* 404 Illustration */}
                    <div className="relative mb-8">
                        <div className="text-[180px] font-black text-zlendo-grey-light leading-none select-none">
                            404
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-zlendo-teal/10 flex items-center justify-center">
                                <Search className="w-16 h-16 text-zlendo-teal" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-nunito font-black text-zlendo-grey-dark mb-4">
                        Post Not Found
                    </h1>

                    <p className="text-lg text-zlendo-grey-medium mb-8">
                        The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-zlendo-teal text-white font-bold rounded-full shadow-lg shadow-zlendo-teal/30 hover:scale-105 transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Browse All Articles
                        </Link>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-zlendo-grey-light text-zlendo-grey-dark font-bold rounded-full hover:border-zlendo-teal/30 hover:bg-zlendo-teal/5 transition-all"
                        >
                            Go to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
