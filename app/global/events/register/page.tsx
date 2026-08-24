import { Metadata } from 'next';
import RegisterClient from './RegisterClient';

export const metadata: Metadata = {
    title: 'Event Registration | Zlendo Realty',
    description: 'Register for live events, webinars, and masterclasses hosted by Zlendo Realty.',
};

export default function RegisterPage() {
    return <RegisterClient />;
}
