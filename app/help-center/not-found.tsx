import Link from 'next/link';
import { FileQuestion, ArrowLeft, Search, BookOpen } from 'lucide-react';

export default function HelpCenterNotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center py-20">
            <div className="text-center max-w-lg mx-auto px-6">
                <div className="w-20 h-20 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center mx-auto mb-6">
                    <FileQuestion className="w-10 h-10 text-zlendo-teal" />
                </div>

                <h1 className="text-3xl font-nunito font-black text-zlendo-grey-dark mb-3">
                    Article Not Found
                </h1>
                <p className="text-lg text-zlendo-grey-medium mb-8">
                    Sorry, we couldn&apos;t find the help article you&apos;re looking for. It may have been moved or removed.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/help-center"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-zlendo-teal text-white font-bold rounded-xl hover:bg-zlendo-teal/90 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Help Center Home
                    </Link>
                    <Link
                        href="/help-center/search"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-black/10 text-zlendo-grey-dark font-bold rounded-xl hover:border-zlendo-teal/30 hover:text-zlendo-teal transition-all"
                    >
                        <Search className="w-4 h-4" />
                        Search Articles
                    </Link>
                </div>
            </div>
        </div>
    );
}
