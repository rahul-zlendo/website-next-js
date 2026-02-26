import { redirect } from 'next/navigation';

// Permanent redirect: /business/real-estate-brokers → /business/builder-and-promoter
export default function RealEstateBrokersRedirect({
    params,
}: {
    params: { country: string };
}) {
    redirect(`/${params.country}/business/builder-and-promoter`);
}
