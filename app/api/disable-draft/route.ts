import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Disables Next.js Draft Mode and redirects to the homepage.
 * Call: /api/disable-draft
 */
export async function GET() {
  const draft = await draftMode();
  draft.disable();
  redirect('/in');
}
