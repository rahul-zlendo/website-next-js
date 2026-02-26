import { redirect } from 'next/navigation';

// Permanent redirect: /business/real-estate-brokers → /business/builder-and-promoter
export default async function RealEstateBrokersRedirect({
    params,
}: {
    params: Promise<{ country: string }>;
}) {
    const { country } = await params;
    redirect(`/${country}/business/builder-and-promoter`);
}
