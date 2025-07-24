import Link from 'next/link';

export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>
        This site shares news and information about governmental policies and civic
        engagement. Inspired by the official White House website, we aim to provide
        accessible updates and educational resources for the public.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
