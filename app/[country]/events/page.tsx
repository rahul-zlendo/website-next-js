import { Metadata } from 'next';
import EventsClient from '@/app/global/events/EventsClient';

export const metadata: Metadata = {
    title: 'Live and Upcoming Events & Webinars | Zlendo Realty',
    description: 'Join Zlendo Realty for live events, webinars, and masterclasses on PropTech and AI floor planning.',
};

export default function EventsPage() {
    return <EventsClient />;
}
