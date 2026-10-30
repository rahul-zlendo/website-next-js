import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';

    return createPageMetadata({
        title: isGlobal ? 'Template Details' : 'Zlendo Realty | Pick Templates and Customize Your Home Plan',
        description: 'Explore Zlendo Realty’s expertly designed templates and customize every space in your home. Start Your design, your way.',
        path: isGlobal ? '/template-detail' : '/in/template-detail',
        ogTitle: 'Zlendo Realty – Customize Your Dream Home Plan',
        ogDescription: 'Discover Zlendo Realty’s home plan templates and personalize them to fit your lifestyle. Start designing your perfect space today with simple customization tools.',
        keywords: [
            'floor plan templates',
            'house templates',
            'kitchen templates',
            'living room templates',
            'bedroom templates',
            'bathroom templates',
            '1bhk house plan',
            '2bhk house design',
            'apartment design',
        ],
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}

