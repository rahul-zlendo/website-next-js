import Link from 'next/link';
import { FileText, ChevronRight, Clock } from 'lucide-react';
import type { HelpArticle } from '@/lib/helpcenter/types';

interface ArticleCardProps {
    article: HelpArticle;
    showCategory?: boolean;
}

export default function ArticleCard({ article, showCategory = true }: ArticleCardProps) {
    return (
        <Link
            href={`/help-center/${article.slug}`}
            className="group block p-5 rounded-xl bg-white border border-black/5 hover:border-zlendo-teal/20 hover:shadow-lg hover:shadow-zlendo-teal/5 transition-all duration-300"
        >
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zlendo-teal/10 flex items-center justify-center shrink-0 group-hover:bg-zlendo-teal group-hover:text-white transition-all">
                    <FileText className="w-5 h-5 text-zlendo-teal group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-zlendo-grey-dark group-hover:text-zlendo-teal transition-colors line-clamp-2 mb-1">
                        {article.title}
                    </h3>
                    <p className="text-sm text-zlendo-grey-medium line-clamp-2 mb-3">
                        {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-zlendo-grey-medium">
                        {showCategory && article.categories.length > 0 && (
                            <span className="px-2 py-0.5 bg-zlendo-teal/5 text-zlendo-teal font-medium rounded-full">
                                {article.categories[0].name}
                            </span>
                        )}
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.dateFormatted}
                        </span>
                    </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zlendo-grey-medium/50 group-hover:text-zlendo-teal group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </div>
        </Link>
    );
}
