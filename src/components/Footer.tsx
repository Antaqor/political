import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10 text-sm">
        <nav className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left">
          <Link href="#" className="hover:underline">NEWS</Link>
          <Link href="#" className="hover:underline">ADMINISTRATION</Link>
          <Link href="#" className="hover:underline">ISSUES</Link>
          <Link href="#" className="hover:underline">CONTACT</Link>
          <Link href="#" className="hover:underline">EOP</Link>
          <Link href="#" className="hover:underline">VISIT</Link>
          <Link href="#" className="hover:underline">GALLERY</Link>
          <Link href="#" className="hover:underline">VIDEO LIBRARY</Link>
        </nav>

        <form className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2">
          <label htmlFor="newsletter" className="sr-only">
            Subscribe to our newsletter
          </label>
          <input
            id="newsletter"
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 placeholder:text-neutral-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>

        <address className="not-italic text-center sm:text-left">
          Political Site<br />1600 Pennsylvania Ave NW<br />Washington, DC 20500
        </address>

        <p className="text-xs text-neutral-500 text-center sm:text-left">
          © 2025 Political Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
