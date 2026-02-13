import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: {
                absolute: 'Zlendo Realty Services – General Terms & Conditions',
            },
            description: 'Read the General Terms and Conditions for using Zlendo Realty services. Understand user responsibilities, platform usage rules, and governing conditions.',
            openGraph: {
                title: 'Zlendo Realty Services – General Terms & Conditions',
                description: 'Read the General Terms and Conditions for using Zlendo Realty services. Understand user responsibilities, platform usage rules, and governing conditions.',
            },
        };
    }

    return {
        title: 'General Terms | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
