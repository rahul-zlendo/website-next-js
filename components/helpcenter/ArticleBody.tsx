'use client';

import { useRef, useEffect } from 'react';

interface ArticleBodyProps {
    content: string;
}

export default function ArticleBody({ content }: ArticleBodyProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;

        // Add target="_blank" to external links
        const links = contentRef.current.querySelectorAll('a[href]');
        links.forEach((link) => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('/') && !href.startsWith('#') && !href.includes('zlendorealty.com')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
            // Update internal helpcenter links to point to our /help-center route
            if (href && href.includes('helpcenter.zlendorealty.com/docs/')) {
                const slug = href.split('/docs/').pop()?.replace(/\/$/, '');
                if (slug) {
                    link.setAttribute('href', `/help-center/${slug}`);
                }
            }
        });

        // Lazy load images
        const images = contentRef.current.querySelectorAll('img');
        images.forEach((img) => {
            img.setAttribute('loading', 'lazy');
            img.classList.add('rounded-xl');
        });

        // Style tables
        const tables = contentRef.current.querySelectorAll('table');
        tables.forEach((table) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'overflow-x-auto rounded-xl border border-black/10';
            table.parentNode?.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
    }, [content]);

    return (
        <div
            ref={contentRef}
            className="help-content prose prose-lg max-w-none
        prose-headings:font-nunito prose-headings:font-bold prose-headings:text-zlendo-grey-dark
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-black/5
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
        prose-p:text-zlendo-grey-medium prose-p:leading-relaxed
        prose-a:text-zlendo-teal prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
        prose-strong:text-zlendo-grey-dark prose-strong:font-bold
        prose-ul:text-zlendo-grey-medium prose-ol:text-zlendo-grey-medium
        prose-li:marker:text-zlendo-teal
        prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-black/5
        prose-blockquote:border-l-zlendo-teal prose-blockquote:bg-zlendo-teal/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-4
        prose-code:bg-zlendo-grey-dark prose-code:text-white prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal
        prose-pre:bg-zlendo-grey-dark prose-pre:rounded-xl prose-pre:shadow-lg
        prose-table:text-sm
        prose-th:bg-zlendo-teal/10 prose-th:text-zlendo-grey-dark prose-th:font-bold
        prose-td:border-black/5
      "
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
