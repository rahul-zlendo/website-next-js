import { redirect } from 'next/navigation';

// Root path: redirect to default country. Geo-detection runs in middleware (request-time).
// No fetch here so the route can be built statically; middleware handles geo on real requests.
export default function RootPage() {
  redirect('/in');
}
