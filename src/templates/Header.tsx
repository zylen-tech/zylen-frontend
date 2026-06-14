import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'partners', label: 'Partners', href: '#partners' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
];

const resourcesLinks = [
  { label: 'Documentation', href: '#docs' },
  { label: 'Blog', href: '#blog' },
  { label: 'Support', href: '#support' },
];

const Header = () => {
  const [active, setActive] = useState('home');
  const [spinning, setSpinning] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = (id: string) => {
    setSpinning(id);
    setTimeout(() => {
      setActive(id);
      setSpinning(null);
    }, 450);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/assets/brand/logo/logo.png"
            alt="Zylen - E-Invoice Integration Service"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            const isSpinning = spinning === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => handleClick(link.id)}
                className={[
                  'relative flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300',
                  isActive
                    ? 'border border-gray-300 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900',
                ].join(' ')}
              >
                {isActive && (
                  <span
                    className={`inline-block size-1.5 rounded-full bg-blue-600 ${
                      isSpinning ? 'nav-dot-spin' : ''
                    }`}
                  />
                )}
                <span className={isSpinning ? 'nav-label-spin' : ''}>
                  {link.label}
                </span>
              </Link>
            );
          })}

          {/* Resources dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 transition-all duration-300 hover:text-gray-900"
            >
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="dropdown-enter absolute left-0 top-full mt-2 w-44 rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
                {resourcesLinks.map((r) => (
                  <Link
                    key={r.label}
                    href={r.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 transition-colors duration-150 hover:bg-gray-50 hover:text-blue-600"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="#login"
            className="rounded-full border border-blue-600 px-5 py-1.5 text-sm font-medium text-blue-600 transition-all duration-300 hover:bg-blue-50"
          >
            Login
          </Link>
          <Link
            href="#join"
            className="rounded-full bg-blue-600 px-5 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
          >
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
