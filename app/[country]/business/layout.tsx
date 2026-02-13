import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: {
                absolute: 'Zlendo Realty | India’s Leading Cloud Platform for Designers & Architects',
            },
            description: 'Zlendo Realty is India’s all-in-one cloud platform for designers, architects, and interior experts. Streamline your projects, collaborate seamlessly, and access tools that elevate your design workflow.',
            openGraph: {
                title: 'Zlendo Realty – All-in-One Cloud Platform for Designers & Architects',
                description: 'Discover Zlendo Realty, India’s leading cloud platform for designers, architects, and interior professionals. Manage projects, collaborate effortlessly, and bring your design vision to life.',
            },
        };
    }

    return {
        title: 'Business Solutions | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
