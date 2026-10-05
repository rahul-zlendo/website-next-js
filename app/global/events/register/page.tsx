import { Metadata } from 'next';
import RegisterClient from './RegisterClient';

export const metadata: Metadata = {
    alternates: { canonical: 'https://zlendorealty.com/events/register' },
    title: 'Event Registration | Zlendo Realty',
    description: 'Register for live events, webinars, and masterclasses hosted by Zlendo Realty.',
};

export default function RegisterPage() {
    return <RegisterClient />;
}
