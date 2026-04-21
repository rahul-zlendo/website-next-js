import React from 'react';
import type { PolicySection } from './types';

export const cookiePolicySections: PolicySection[] = [
    {
        id: 'intro',
        title: 'Introduction',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>Our Privacy Policy sets out our principles governing the collection, processing and storage of Your information. This policy specifically describes how we or our partners use cookies, as well as the choices available to You for controlling them. This cookie statement should be read in conjunction with the Zlendo Privacy Policy.</p>
            </div>
        )
    },
    {
        id: 'definition',
        title: '1. WHAT IS A COOKIE?',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>
                    A cookie is a small text file placed on Your computer or other internet-connected device to recognise Your browser, enable analytics, and store information such as Your language preferences or login details. Cookies are entirely safe and cannot be used to run programs or transmit viruses to Your device. You can learn more about cookies by clicking{' '}
                    <a href="https://www.cloudflare.com/en-in/learning/privacy/what-are-cookies/" target="_blank" rel="noopener noreferrer" className="text-zlendo-teal font-bold hover:underline">
                        here
                    </a>.
                </p>
            </div>
        )
    },
    {
        id: 'types',
        title: '2. WHAT TYPE OF COOKIES DOES ZLENDO USE?',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>Cookies are small pieces of data stored in text files on Your computer or other device when websites are accessed through a browser. The cookies used on the Zlendo Platform have been categorised as set out below:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-3">
                    <li><strong>Strictly necessary cookies:</strong> These cookies are required for our website to operate and cannot be disabled in our systems. They are essential to allow You to navigate the Zlendo Platform. If these cookies are removed or turned off, we cannot guarantee that You will be able to use our website.</li>
                    <li><strong>Functional/Preference cookies:</strong> These cookies enable us to remember the choices made by You (such as Your username, language, or region), as well as other functions (including control of the cookie banner and redirection to a new page), in order to provide a more personalised online experience. These preferences are retained through the use of persistent cookies, so that You do not need to set them again on subsequent visits to the Zlendo Platform.</li>
                    <li><strong>Analytics cookies:</strong> These cookies assist us in improving the performance and functioning of our Platform (for example, by ensuring that users can easily find what they are looking for). They track information relating to visits to the Platform so that we can make enhancements and report on our performance. For example, they analyse visitor and user behaviour to provide more relevant content or suggest certain activities. These cookies also collect information on how visitors use the Platform, including the site from which a user arrived, the number of visits, and the duration of time spent on the Platform. We may also use analytics cookies to test new pages or features and assess how users respond to them.</li>
                    <li><strong>Sessions cookies:</strong> These cookies automatically expire when You close Your Platform and are not retained on Your device thereafter.</li>
                    <li><strong>Persistent cookies:</strong> These cookies will remain on Your device until they expire or are deleted by You. Expiration periods are defined within the cookies themselves; some may expire after a few minutes, while others may remain valid for several years.</li>
                    <li><strong>First party cookies:</strong> Cookies placed by the website that You are visiting are referred to as "first-party cookies."</li>
                </ol>
            </div>
        )
    },
    {
        id: 'third-party',
        title: '3. WHAT IS A THIRD PARTY COOKIE?',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <ol className="list-[lower-alpha] pl-6 space-y-3">
                    <li>A third party cookie is a cookie that is not placed by the website or platform that You are directly accessing. In certain instances, elements of Zlendo's Platform or Services may be delivered or supported through domains or infrastructure operated by Zlendo or its authorised service providers, which may technically function as third party domains. Zlendo's privacy obligations apply equally to such domains to the extent they are operated or controlled by Zlendo.</li>
                    <li>Zlendo does not allow third party tracking entities to place cookies or similar tracking technologies on its Platform for independent advertising or profiling activities. Where Zlendo incorporates content or features hosted by third-party platforms (such as video players, maps, or other embedded tools), those third parties may place cookies on Your device that are necessary for the proper functioning of the embedded service, including for bandwidth management, language settings, consent recording, or the collection of anonymised usage data.</li>
                    <li>Where practicable, Zlendo seeks to adopt privacy friendly configurations such as restricting tracking to anonymised statistics or disabling non essential tracking features. However, certain cookies or tracking technologies may be automatically deployed by third party platforms when embedded content is loaded, over which Zlendo may not exercise full control. The use of such cookies is governed by the applicable privacy policies of the respective third parties.</li>
                </ol>
            </div>
        )
    },
    {
        id: 'management',
        title: '4. MANAGING COOKIES',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <ol className="list-[lower-alpha] pl-6 space-y-4">
                    <li><strong>Cookie preference manager:</strong> You may control and update Your cookie preferences at any time using the cookie preference manager available on Zlendo's website or platform, including by accessing the "Manage Cookie Preferences" option or the cookie icon displayed on the webpage, where such options are provided based on Your location and applicable regulatory requirements.</li>
                    <li><strong>Browser settings:</strong>
                        <div className="mt-2 space-y-4">
                            <p>Most web browsers allow You to manage or disable cookies through their browser settings. Please note that restricting cookies may impact certain functionalities of the Platform and may limit Your ability to use or retain personalised features, such as saved preferences or login details. Browser manufacturers provide guidance on managing cookies through their respective help or support pages, which are linked below:</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 p-4 bg-zlendo-teal/5 rounded-xl border border-zlendo-teal/10 font-bold">
                                <a href="https://ulaabrowser.zohodesk.com/portal/en/kb/articles/how-to-change-cookie-settings" target="_blank" rel="noopener noreferrer" className="text-zlendo-teal hover:underline text-sm">Ulaa</a>
                                <a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer" className="text-zlendo-teal hover:underline text-sm">Google Chrome</a>
                                <a href="https://support.microsoft.com/en-us/kb/260971" target="_blank" rel="noopener noreferrer" className="text-zlendo-teal hover:underline text-sm">Internet Explorer</a>
                                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-zlendo-teal hover:underline text-sm">Mozilla Firefox</a>
                                <a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-zlendo-teal hover:underline text-sm">Safari (Desktop)</a>
                                <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-zlendo-teal hover:underline text-sm">Safari (Mobile)</a>
                                <a href="https://support.google.com/ics/nexus/bin/answer.py?hl=en&answer=2425067" target="_blank" rel="noopener noreferrer" className="text-zlendo-teal hover:underline text-sm">Android Browser</a>
                                <a href="https://www.opera.com/help" target="_blank" rel="noopener noreferrer" className="text-zlendo-teal hover:underline text-sm">Opera</a>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        )
    },
    {
        id: 'disclaimer',
        title: '5. DISCLAIMER',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>We may update this Cookie Policy from time to time to reflect, for example: changes in the cookies we use or for other operational, legal or regulatory reasons. You are therefore encouraged to review this Cookie Statement periodically to remain informed about our use of cookies and related technologies.</p>
                <p>For further information regarding cookies, You may contact us at <a href="mailto:dataprotection@zlendorealty.com" className="text-zlendo-teal font-bold hover:underline">dataprotection@zlendorealty.com</a>.</p>
                <p className="mt-8 pt-8 border-t border-zlendo-grey-medium/10 text-sm text-zlendo-grey-medium/60 italic">
                    Last Updated: April 2026
                </p>
            </div>
        )
    }
];
