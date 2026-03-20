
import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            keywords: [
        'zlendo realty contact',
        'zlendo realty software',
        'ai floor planner design & visualize in 3D',
        'affiliate & partner program',
        'demo requests free trial',
        '3d home design',
        'floor design',
    ],
            title: {
                absolute: 'Contact Zlendo Realty | Get in Touch With Our Team',
            },
            description: 'Contact Zlendo Realty for inquiries about our products and services. Reach out to our team for support, questions, or partnership opportunities.',
            openGraph: {
                title: 'Zlendo Realty Support & Inquiries',
                description: 'Have questions or need assistance? Get in touch with the Zlendo Realty team for support, product information, or general inquiries.',
            },
            alternates: {
                canonical: 'https://zlendorealty.com/in/contact',
                languages: {
                    'en-IN': 'https://zlendorealty.com/in/contact',
                    'x-default': 'https://zlendorealty.com/in/contact',
                },
            },
        };
    }

    return {
            keywords: [
        'zlendo realty contact',
        'zlendo realty software',
        'ai floor planner design & visualize in 3D',
        'affiliate & partner program',
        'demo requests free trial',
        '3d home design',
        'floor design',
    ],
        title: 'Contact Us | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}
