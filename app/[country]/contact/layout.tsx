import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: {
                absolute: 'Contact Zlendo Realty | Get in Touch With Our Team',
            },
            description: 'Contact Zlendo Realty for inquiries about our products and services. Reach out to our team for support, questions, or partnership opportunities.',
            openGraph: {
                title: 'Zlendo Realty Support & Inquiries',
                description: 'Have questions or need assistance? Get in touch with the Zlendo Realty team for support, product information, or general inquiries.',
            },
        };
    }

    return {
        title: 'Contact Us | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
