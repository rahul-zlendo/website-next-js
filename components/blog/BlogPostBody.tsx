'use client';

import { useEffect, useRef } from 'react';

interface BlogPostBodyProps {
    content: string;
}

export default function BlogPostBody({ content }: BlogPostBodyProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    // Process content after mount for any client-side enhancements
    useEffect(() => {
        if (!contentRef.current) return;

        // Add target="_blank" to external links
        const links = contentRef.current.querySelectorAll('a');
        links.forEach((link) => {
            const href = link.getAttribute('href');
            if (href && (href.startsWith('http') || href.startsWith('//'))) {
                if (!href.includes('zlendorealty.com')) {
                    link.setAttribute('target', '_blank');
                    link.setAttribute('rel', 'noopener noreferrer');
                }
            }
        });

        // Add lazy loading to images that don't have it
        const images = contentRef.current.querySelectorAll('img');
        images.forEach((img) => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }, [content]);

    return (
        <div
            ref={contentRef}
            className="blog-content prose prose-lg max-w-none
        /* Headings */
        prose-headings:font-nunito prose-headings:font-bold prose-headings:text-zlendo-grey-dark
        prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
        prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:border-b prose-h2:border-black/5 prose-h2:pb-4
        prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
        prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6
        
        /* Paragraphs */
        prose-p:text-zlendo-grey-medium prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-[17px]
        
        /* Links */
        prose-a:text-zlendo-teal prose-a:font-semibold prose-a:no-underline prose-a:border-b prose-a:border-zlendo-teal/30
        hover:prose-a:border-zlendo-teal prose-a:transition-colors
        
        /* Lists */
        prose-ul:my-6 prose-ul:space-y-3
        prose-ol:my-6 prose-ol:space-y-3
        prose-li:text-zlendo-grey-medium prose-li:leading-relaxed prose-li:marker:text-zlendo-teal
        
        /* Blockquotes */
        prose-blockquote:border-l-4 prose-blockquote:border-zlendo-teal prose-blockquote:bg-zlendo-mint/30
        prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic
        prose-blockquote:my-8 prose-blockquote:text-zlendo-grey-dark prose-blockquote:font-medium
        
        /* Code */
        prose-code:bg-zlendo-grey-light prose-code:px-2 prose-code:py-1 prose-code:rounded-lg
        prose-code:text-zlendo-grey-dark prose-code:text-sm prose-code:font-mono
        prose-code:before:content-none prose-code:after:content-none
        
        /* Pre (code blocks) */
        prose-pre:bg-zlendo-grey-dark prose-pre:text-white prose-pre:rounded-2xl prose-pre:p-6
        prose-pre:overflow-x-auto prose-pre:my-8
        
        /* Images */
        prose-img:rounded-2xl prose-img:shadow-xl prose-img:mx-auto prose-img:my-8
        
        /* Figures */
        prose-figure:my-10
        prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-zlendo-grey-medium/70
        prose-figcaption:mt-4 prose-figcaption:italic
        
        /* Tables */
        prose-table:border-collapse prose-table:w-full prose-table:my-8
        prose-th:bg-zlendo-teal/5 prose-th:text-zlendo-grey-dark prose-th:font-bold prose-th:p-4
        prose-th:border prose-th:border-black/10
        prose-td:p-4 prose-td:border prose-td:border-black/10 prose-td:text-zlendo-grey-medium
        
        /* HR */
        prose-hr:border-black/10 prose-hr:my-12
        
        /* Strong/Bold */
        prose-strong:text-zlendo-grey-dark prose-strong:font-bold
        
        /* Em/Italic */
        prose-em:text-zlendo-grey-dark
      "
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
