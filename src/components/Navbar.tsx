import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="font-bold text-lg">
          Улс төрийн сайт
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Нүүр</Link>
          <Link href="/about" className="hover:underline">Тухай</Link>
        </div>
      </div>
    </nav>
  );
}
