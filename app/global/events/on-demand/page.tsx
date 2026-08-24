import { Metadata } from 'next';
import OnDemandClient from './OnDemandClient';

export const metadata: Metadata = {
    title: 'On-Demand Webinars & Recorded Events | Zlendo Realty',
    description: 'Access our archives of recorded webinars, masterclasses, and past events to level up your architectural workflows.',
};

export default function OnDemandEventsPage() {
    return <OnDemandClient />;
}
