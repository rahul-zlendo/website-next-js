
import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            keywords: [
                'interior design ideas',
                'interior design planner',
                'AI interior design',
                '3D house modeling',
                '3D house design',
                'floor plan templates',
                'building layout templates',
                'downloadable floor plan templates',
            ],
            title: {
                absolute: 'Zlendo Realty | Professionally Designed Home Plan Templates',
            },
            description: 'Explore Zlendo Realty’s complete collection of expertly crafted plan templates for every space in your home. Sign up today and start designing with ease!',
            openGraph: {
                title: 'Zlendo Realty – Complete Collection of Home Plan Templates',
                description: 'Discover beautifully designed templates for every room in your home with Zlendo Realty. Sign up now and bring your dream spaces to life!',
                url: 'https://zlendorealty.com/in/viewalltemplates',
                siteName: 'Zlendo Realty',
                images: [
                    {
                        url: 'https://zlendorealty.com/og-image.png',
                        width: 1200,
                        height: 630,
                        alt: 'Zlendo Realty Home Plan Templates',
                        type: 'image/png',
                    },
                ],
                locale: 'en_IN',
                type: 'website',
            },
        };
    }

    return {
        keywords: [
            'interior design ideas',
            'interior design planner',
            'AI interior design',
            '3D house modeling',
            '3D house design',
            'floor plan templates',
            'building layout templates',
            'downloadable floor plan templates',
        ],
        title: 'Home Plan Templates | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}
