import { NextResponse } from 'next/server';
import { HUBSPOT_ACCESS_TOKEN } from '@/lib/config/env';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        // Use the token from environment variables
        const HS_ACCESS_TOKEN = HUBSPOT_ACCESS_TOKEN;

        const uploadRes = await fetch("https://api.hubapi.com/files/v3/files", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${HS_ACCESS_TOKEN}`,
            },
            body: formData,
        });

        if (!uploadRes.ok) {
            const errorText = await uploadRes.text();
            console.error("HubSpot Upload Error:", errorText);
            return NextResponse.json(
                { error: "Failed to upload file to HubSpot" },
                { status: uploadRes.status }
            );
        }

        const data = await uploadRes.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Internal API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
