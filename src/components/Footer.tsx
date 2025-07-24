import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 p-8 mt-12">
      <div className="max-w-5xl mx-auto space-y-6 text-sm">
        <nav className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
          <span>NEWS</span>
          <span>ADMINISTRATION</span>
          <span>ISSUES</span>
          <span>CONTACT</span>
          <span>EOP</span>
          <span>VISIT</span>
          <span>GALLERY</span>
          <span>VIDEO LIBRARY</span>
        </nav>
        <p className="font-semibold text-center">
          Subscribe to The White House newsletter
        </p>
        <p className="text-center">Please leave blank.</p>
        <p className="text-center">Text POTUS to 45470 to receive updates</p>
        <address className="not-italic text-center">
          THE WHITE HOUSE
          <br />
          1600 Pennsylvania Ave NW
          <br />
          Washington, DC 20500
        </address>
        <p className="text-center">X Instagram</p>
      </div>
    </footer>
  );
}
