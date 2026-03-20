import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'User Profile | Zlendo Realty Social Interior Design',
    description: 'Explore shared home design templates and inspirations from the Zlendo Realty community. Follow creators and discover new spatial ideas.',
    alternates: {
        canonical: 'https://zlendorealty.com/in/user-profile',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/user-profile',
            'x-default': 'https://zlendorealty.com/in/user-profile',
        },
    },
};

export default function UserProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
