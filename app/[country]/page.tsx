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
        url: 'https://www.zlendorealty.com/in',
        siteName: 'Zlendo Realty',
        images: [
          {
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: 'Zlendo Realty AI Design Software',
          },
        ],
        locale: 'en_IN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'AI-Powered Home & Office Design Software | Zlendo Realty',
        description: 'Create professional 2D and 3D floor plans in minutes with Zlendo Realty AI.',
        images: ['/og-image.png'],
      },
    };
  }

  // Fallback metadata for other countries
  return {
    title: 'Zlendo Realty | Free 3D Home Design & Floor Planning Software',
    description: 'Free 3D Home Design & Floor Planning Software. Explore powerful tools and resources to design your perfect space',
  };
}

export default function Page() {
  return <HomeClient />;
}
