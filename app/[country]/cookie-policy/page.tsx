import Link from 'next/link';
import { ChevronRight, Home, Cookie } from 'lucide-react';
import { Metadata } from 'next';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';

export const metadata: Metadata = {
    title: 'Cookie Policy - Zlendo Realty',
    description: 'Information about how we use cookies and similar technologies.',
    openGraph: {
        title: 'Cookie Policy - Zlendo Realty',
        description: 'Information about how we use cookies and similar technologies.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Cookie Policy',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cookie Policy - Zlendo Realty',
        description: 'Information about how we use cookies and similar technologies.',
        images: ['/og-image.png'],
    },
};

interface CookiePolicyPageProps {
    params: Promise<{
        country: string;
    }>;
}

export default async function CookiePolicyPage(props: CookiePolicyPageProps) {
    const params = await props.params;
    const { country } = params;
    const getPath = (path: string) => `/${country}${path}`;

    // Cookie Policy content embedded directly in the page
    const policy = {
        id: 'cookie-policy',
        slug: 'cookie-policy',
        title: 'Cookie Policy',
        icon: Cookie,
        category: 'privacy' as const,
        description: 'Information about how we use cookies and similar technologies.',
        lastUpdated: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        sections: [
            {
                id: 'introduction',
                title: 'Introduction',
                content: 'Our Privacy Policy sets out our principles governing the collection, processing and storage of Your information. This policy specifically describes how we or our partners use cookies, as well as the choices available to You for controlling them. This cookie statement should be read in conjunction with the Zlendo Privacy Policy.'
            },
            {
                id: 'what-is-cookie',
                title: '1. What is a Cookie?',
                content: (
                    <span className="text-lg text-zlendo-grey-medium font-nunito">
                        A cookie is a small text file placed on Your computer or other internet-connected device to recognise Your browser, enable analytics, and store information such as Your language preferences or login details. Cookies are entirely safe and cannot be used to run programs or transmit viruses to Your device. You can learn more about cookies by clicking{' '}
                        <a href="https://www.cloudflare.com/en-in/learning/privacy/what-are-cookies/" target="_blank" rel="noopener noreferrer" className="text-zlendo-teal font-bold hover:underline">
                            here
                        </a>.
                    </span>
                )
            },
            {
                id: 'cookie-types',
                title: '2. What type of Cookies does Zlendo use?',
                content: 'Cookies are small pieces of data stored in text files on Your computer or other device when websites are accessed through a browser. The cookies used on the Zlendo Platform have been categorised as set out below:',
                subsections: [
                    {
                        id: 'strict',
                        title: 'a. Strictly necessary cookies',
                        content: 'These cookies are required for our website to operate and cannot be disabled in our systems. They are essential to allow You to navigate the Zlendo Platform. If these cookies are removed or turned off, we cannot guarantee that You will be able to use our website.'
                    },
                    {
                        id: 'functional',
                        title: 'b. Functional/Preference cookies',
                        content: 'These cookies enable us to remember the choices made by You (such as Your username, language, or region), as well as other functions (including control of the cookie banner and redirection to a new page), in order to provide a more personalised online experience. These preferences are retained through the use of persistent cookies, so that You do not need to set them again on subsequent visits to the Zlendo Platform.'
                    },
                    {
                        id: 'analytics',
                        title: 'c. Analytics cookies',
                        content: 'These cookies assist us in improving the performance and functioning of our Platform (for example, by ensuring that users can easily find what they are looking for). They track information relating to visits to the Platform so that we can make enhancements and report on our performance. For example, they analyse visitor and user behaviour to provide more relevant content or suggest certain activities. These cookies also collect information on how visitors use the Platform, including the site from which a user arrived, the number of visits, and the duration of time spent on the Platform. We may also use analytics cookies to test new pages or features and assess how users respond to them.'
                    },
                    {
                        id: 'session',
                        title: 'd. Sessions cookies',
                        content: 'These cookies automatically expire when You close Your Platform and are not retained on Your device thereafter.'
                    },
                    {
                        id: 'persistent',
                        title: 'e. Persistent cookies',
                        content: 'These cookies will remain on Your device until they expire or are deleted by You. Expiration periods are defined within the cookies themselves; some may expire after a few minutes, while others may remain valid for several years.'
                    },
                    {
                        id: 'first-party',
                        title: 'f. First party cookies',
                        content: 'Cookies placed by the website that You are visiting are referred to as "first-party cookies."'
                    }
                ]
            },
            {
                id: 'third-party',
                title: '3. What is a third party cookie?',
                content: [
                    'A third party cookie is a cookie that is not placed by the website or platform that You are directly accessing. In certain instances, elements of Zlendo\'s Platform or Services may be delivered or supported through domains or infrastructure operated by Zlendo or its authorised service providers, which may technically function as third party domains. Zlendo\'s privacy obligations apply equally to such domains to the extent they are operated or controlled by Zlendo.',
                    'Zlendo does not allow third party tracking entities to place cookies or similar tracking technologies on its Platform for independent advertising or profiling activities. Where Zlendo incorporates content or features hosted by third-party platforms (such as video players, maps, or other embedded tools), those third parties may place cookies on Your device that are necessary for the proper functioning of the embedded service, including for bandwidth management, language settings, consent recording, or the collection of anonymised usage data.',
                    'Where practicable, Zlendo seeks to adopt privacy friendly configurations such as restricting tracking to anonymised statistics or disabling non essential tracking features. However, certain cookies or tracking technologies may be automatically deployed by third party platforms when embedded content is loaded, over which Zlendo may not exercise full control. The use of such cookies is governed by the applicable privacy policies of the respective third parties.'
                ]
            },
            {
                id: 'managing-cookies',
                title: '4. Managing cookies',
                content: '',
                subsections: [
                    {
                        id: 'preference-manager',
                        title: 'a. Cookie preference manager',
                        content: 'You may control and update Your cookie preferences at any time using the cookie preference manager available on Zlendo\'s website or platform, including by accessing the "Manage Cookie Preferences" option or the cookie icon displayed on the webpage, where such options are provided based on Your location and applicable regulatory requirements.'
                    },
                    {
                        id: 'browser-settings',
                        title: 'b. Browser settings',
                        content: (
                            <div className="space-y-4">
                                <p className="text-lg text-zlendo-grey-medium leading-relaxed">
                                    Most web browsers allow You to manage or disable cookies through their browser settings. Please note that restricting cookies may impact certain functionalities of the Platform and may limit Your ability to use or retain personalised features, such as saved preferences or login details. Browser manufacturers provide guidance on managing cookies through their respective help or support pages, which are linked below:
                                </p>
                                <p className="text-lg text-zlendo-grey-medium leading-relaxed">
                                    [
                                    <a
                                        href="https://ulaabrowser.zohodesk.com/portal/en/kb/articles/how-to-change-cookie-settings"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zlendo-teal font-bold hover:underline"
                                    >
                                        Ulaa
                                    </a>,{" "}
                                    <a
                                        href="https://support.google.com/chrome/answer/95647?hl=en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zlendo-teal font-bold hover:underline"
                                    >
                                        Google Chrome
                                    </a>,{" "}
                                    <a
                                        href="https://support.microsoft.com/en-us/kb/260971"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zlendo-teal font-bold hover:underline"
                                    >
                                        Internet Explorer
                                    </a>,{" "}
                                    <a
                                        href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zlendo-teal font-bold hover:underline"
                                    >
                                        Mozilla Firefox
                                    </a>,{" "}
                                    <a
                                        href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zlendo-teal font-bold hover:underline"
                                    >
                                        Safari (Desktop)
                                    </a>,{" "}
                                    <a
                                        href="https://support.apple.com/en-us/HT201265"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zlendo-teal font-bold hover:underline"
                                    >
                                        Safari (Mobile)
                                    </a>,{" "}
                                    <a
                                        href="http://support.google.com/ics/nexus/bin/answer.py?hl=en&answer=2425067"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zlendo-teal font-bold hover:underline"
                                    >
                                        Android Browser
                                    </a>,{" "}
                                    <a
                                        href="http://www.opera.com/help"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zlendo-teal font-bold hover:underline"
                                    >
                                        Opera
                                    </a>,{" "}
                                    <a
                                        href="http://www.opera.com/help/mobile/android#privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zlendo-teal font-bold hover:underline"
                                    >
                                        Opera Mobile
                                    </a>
                                    ]
                                </p>

                            </div>
                        )
                    }
                ]
            },
            {
                id: 'disclaimer',
                title: '5. Disclaimer',
                content: 'We may update this Cookie Policy from time to time to reflect, for example: changes in the cookies we use or for other operational, legal or regulatory reasons. You are therefore encouraged to review this Cookie Statement periodically to remain informed about our use of cookies and related technologies. For further information regarding cookies, You may contact us at dpo@zlendorealty.com.'
            }
        ]
    };

    const Icon = policy.icon;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href={getPath('/')} className="hover:text-primary-600 transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">Cookie Policy</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Main Content - 70% */}
                    <div className="lg:col-span-8 min-w-0">
                        <PolicyContent
                            title={policy.title}
                            description={policy.description}
                            lastUpdated={policy.lastUpdated}
                            sections={policy.sections}
                            icon={Icon}
                        />
                    </div>

                    {/* Sidebar - 30% */}
                    <div className="lg:col-span-4 min-w-0">
                        <PolicySidebar activeSlug={policy.slug} />
                    </div>
                </div>
            </div>
        </div>
    );
}
