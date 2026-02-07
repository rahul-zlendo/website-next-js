import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zlendo-grey-dark mb-4">404</h1>
        <p className="text-xl text-zlendo-grey-medium mb-8">Page not found</p>
        <Link
          href="/in"
          className="px-8 py-4 bg-zlendo-teal text-white font-bold rounded-[30px] inline-block hover:scale-105 transition-transform"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
