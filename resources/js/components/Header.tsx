import { Link } from '@inertiajs/react';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="font-bold text-xl text-gray-800">Portfolio</div>

        {/* Navigation */}
        <nav className="space-x-6 text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/photography">Photography</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
