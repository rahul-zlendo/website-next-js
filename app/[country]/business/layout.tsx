
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/seo/metadata';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            keywords: [
                'designers',
                'architects',
                'interior experts',
                'zlendo realty ai design software',
                'floor planner',
                'online civil design software',
                'home planning software',
                'building design software',
            ],
            title: {
                absolute: 'Zlendo Realty | India’s Leading Cloud Platform for Designers & Architects',
            },
            description: 'Zlendo Realty is India’s all-in-one cloud platform for designers, architects, and interior experts. Streamline your projects, collaborate seamlessly, and access tools that elevate your design workflow.',
            openGraph: {
                title: 'Zlendo Realty – All-in-One Cloud Platform for Designers & Architects',
                description: 'Discover Zlendo Realty, India’s leading cloud platform for designers, architects, and interior professionals. Manage projects, collaborate effortlessly, and bring your design vision to life.',
            },
            alternates: localeAlternates('/business', 'in'),
        };
    }

    return {
        keywords: [
            'designers',
            'architects',
            'interior experts',
            'zlendo realty ai design software',
            'floor planner',
            'online civil design software',
            'home planning software',
            'building design software',
        ],
        title: 'Business Solutions',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}
