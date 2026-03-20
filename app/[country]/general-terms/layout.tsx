
import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            keywords: [
        'general terms',
        'zlendo realty services',
        'zlendo realty product',
        'converting 2D plans to 3D',
        'vr studio',
        'api integrations',
        'service level agreement',
        'virtual realty walkthroughs',
    ],
            title: {
                absolute: 'Zlendo Realty Services – General Terms & Conditions',
            },
            description: 'Read the General Terms and Conditions for using Zlendo Realty services. Understand user responsibilities, platform usage rules, and governing conditions.',
            openGraph: {
                title: 'Zlendo Realty Services – General Terms & Conditions',
                description: 'Read the General Terms and Conditions for using Zlendo Realty services. Understand user responsibilities, platform usage rules, and governing conditions.',
            },
            alternates: {
                canonical: 'https://zlendorealty.com/in/general-terms',
                languages: {
                    'en-IN': 'https://zlendorealty.com/in/general-terms',
                    'x-default': 'https://zlendorealty.com/in/general-terms',
                },
            },
        };
    }

    return {
            keywords: [
        'general terms',
        'zlendo realty services',
        'zlendo realty product',
        'converting 2D plans to 3D',
        'vr studio',
        'api integrations',
        'service level agreement',
        'virtual realty walkthroughs',
    ],
        title: 'General Terms | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}
