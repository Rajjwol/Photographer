import { Link } from '@inertiajs/react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700 w-full">
      <div className="max-w-7xl mx-auto px-6 py-8 grid gap-6 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-purple-500 font-bold text-lg">Photographer’s Diary</h2>
          <p className="mt-2 text-sm">
            A platform for fashion photographers worldwide to showcase their work, exchange ideas, and inspire.
            Featuring shoots, interviews, and tips for fellow creatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-3 font-semibold text-white">Contact Info</h3>
          <p className="text-sm">📍 Chabahil - Tolk, Kathmandu</p>
          <p className="text-sm">📱 +42-45687</p>
          <p className="text-sm">📧 test@pagegen.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © 2025 PageGen. All rights reserved. |
        <Link href="/privacy" className="hover:text-gray-300 ml-1">Privacy Policy</Link> |
        <Link href="/terms" className="hover:text-gray-300 ml-1">Terms of Usage</Link>
      </div>
    </footer>
  );
}
