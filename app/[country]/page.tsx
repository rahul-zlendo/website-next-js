import { Metadata } from 'next';
import HomeClient from './HomeClient';

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;

  if (country === 'in') {
    return {
      title: {
        absolute: 'AI Home & Office Design Software for Builders and Architects',
      },
      description: 'Zlendo Realty AI Floor Planner and 2D-to-3D Designs in Minutes. All-in-One Software for Architects, Builders, Interior Designers, and Vastu Consultants. Start Your Free Trial Now!',
      openGraph: {
        title: 'AI-Powered Home & Office Design Software | Zlendo Realty',
        description: 'Create professional 2D and 3D floor plans in minutes with Zlendo Realty AI. The all-in-one design software for Architects, Builders, Interior designers, and Vastu Consultants. Start your free trial today!',
        url: 'https://zlendorealty.com/',
        siteName: 'Zlendo Realty',
        images: [
          {
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: 'Zlendo Realty AI Design Software',
            type: 'image/png',
          },
        ],
        locale: 'en_IN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'AI-Powered Home & Office Design Software | Zlendo Realty',
        description: 'Create professional 2D and 3D floor plans in minutes with Zlendo Realty AI.',
        images: ['https://zlendorealty.com/og-image.png'],
      },
    };
  }

  // Fallback metadata for other countries
  return {
    title: 'Zlendo Realty | Free 3D Home Design & Floor Planning Software',
    description: 'Free 3D Home Design & Floor Planning Software. Explore powerful tools and resources to design your perfect space',
  };
}

// ── FAQPage JSON-LD Schema ──────────────────────────────────────────────────
// Injected into <head> for Google Rich Results (expandable FAQ in SERP)
const faqSchema = {
  '@context': 'https://schema.org/',
  '@type': 'FAQPage',
  'name': 'Zlendo Realty Frequently Asked Questions',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Who can use Zlendo Realty?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Zlendo Realty can be used by homeowners, architects, students, builders, and real estate professionals. It supports both beginners and experienced users involved in home planning and design.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Is it beginner friendly?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. The platform is designed to be easy to use and does not require any technical, architectural, or design background.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Does it work on mobile?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Zlendo Realty works seamlessly across mobile phones, tablets, and desktop devices, allowing access anytime and anywhere.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Is my data secure?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Your designs and project data remain private unless you choose to share them. Strong data security measures are maintained.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Can it be used for professional work?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. The platform is suitable for professional projects, client presentations, and real estate planning, and is widely used for architectural design services and project visualization.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Is support available?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Dedicated customer support is available to assist users whenever help is needed.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* FAQPage structured data — enables expandable FAQ rich results in Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
