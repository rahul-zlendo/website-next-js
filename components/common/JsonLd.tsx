// This is a Server Component (no 'use client' directive)
// Next.js 15 App Router hoists <script type="application/ld+json"> 
// automatically to the <head> if it's rendered as part of a Server Component.

interface JsonLdProps {
  schema: object;
}

/**
 * Injects JSON-LD schema.
 * Being a Server Component, Next.js will hoist this script to the <head> automatically.
 */
export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
