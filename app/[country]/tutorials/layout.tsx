import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Learn 3D Home Design & Floor Planning | Zlendo Realty Tutorials',
    description: 'Explore Zlendo Realty tutorials to learn 2D floor planning, 3D home design, renders, walkthroughs, and AI tools for smarter architecture and Home/Office visualization.',
    keywords: [
        'zlendo realty tutorials',
        'home design guide',
        'floor planning video',
        '3D rendering tutorial',
        'AI home design guide',
        'beginner guide zlendo',
    ],
    openGraph: {
        title: 'Learn 2D & 3D Home Design Step-by-Step | Zlendo Realty Tutorials',
        description: 'Watch step-by-step tutorials on Zlendo Realty to create 2D floor plans, stunning 3D home designs, renders, and walkthroughs for architecture and real estate projects.',
    },
    alternates: {
        canonical: 'https://zlendorealty.com/in/tutorials',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/tutorials',
            'x-default': 'https://zlendorealty.com/in/tutorials',
        },
    },
};

export default function TutorialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
