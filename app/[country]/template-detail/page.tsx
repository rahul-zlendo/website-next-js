import type { Metadata, ResolvingMetadata } from 'next';
import { extractProjectIdFromParam } from '@/lib/utils/encryptionUtils';
import { API_BASE_URL, DEFAULT_API_TOKEN } from '@/lib/config/env';
import ClientPage from './ClientPage';

type Props = {
    params: Promise<{ country: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { params, searchParams }: Props,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    parent: ResolvingMetadata
): Promise<Metadata> {
    // Await the searchParams to safely read the query string in Next.js 15+
    const resolvedSearchParams = await searchParams;
    const templateIdParam = resolvedSearchParams.templateId;

    if (!templateIdParam || typeof templateIdParam !== 'string') {
        return {
            title: 'Template Not Found | Zlendo Realty',
        };
    }

    try {
        const idStr = extractProjectIdFromParam(templateIdParam);
        const idNum = Number(idStr);

        // Fetch the array of templates to find the corresponding title/description
        const res = await fetch(`${API_BASE_URL}/TemplateMaster/GetAllActiveTemplate?RegionId=0`, {
            method: 'GET',
            headers: {
                'zrealtyserviceapikey': DEFAULT_API_TOKEN,
                'Content-Type': 'application/json',
            },
            next: { revalidate: 3600 }
        });

        if (res.ok) {
            const data = await res.json();
            const templates = data.templateList || [];
            const selected = templates.find((t: any) => t.template_Id === idNum);

            if (selected) {
                // Resolve country from params if it exists, otherwise formulate global path
                const resolvedParams = await params;
                const countryPath = resolvedParams?.country ? `/${resolvedParams.country}` : '';
                const baseCanonical = `https://zlendorealty.com${countryPath}/template-detail`;
                // Add search params
                const canonicalUrl = `${baseCanonical}?templateId=${templateIdParam}`;

                return {
                    title: `${selected.template_Name || 'Template'} | Zlendo Realty`,
                    description: selected.description || `Explore this beautiful ${selected.room_TypeName || 'architectural'} design on Zlendo Realty.`,
                    alternates: {
                        canonical: canonicalUrl,
                    },
                    openGraph: {
                        title: `${selected.template_Name || 'Template'} | Zlendo Realty`,
                        description: selected.description || `Explore this beautiful ${selected.room_TypeName || 'architectural'} design on Zlendo Realty.`,
                        images: selected.thumbnail_Url ? [{ url: selected.thumbnail_Url }] : [],
                    }
                };
            }
        }
    } catch (err) {
        console.error("Failed to generate metadata for template detail fetch", err);
    }

    return {
        title: 'Template Detail | Zlendo Realty',
    };
}

export default function TemplateDetailPageWrapper() {
    return <ClientPage />;
}
