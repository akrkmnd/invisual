// src/components/Header.tsx
'use client';

import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 left-24 right-0 z-50 p-8 flex items-center justify-between">
      {/* Logo di kiri */}
      <div className="flex-1">
        <Link href="/" passHref>
          <span className="text-foreground text-lg uppercase tracking-widest font-bold cursor-pointer">
            INVISUAL
          </span>
        </Link>
      </div>

      {/* Navigasi Utama di tengah */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-12 uppercase tracking-widest text-sm text-foreground/80">
          <li>
            <Link href="/works" passHref>
              <span className="hover:text-foreground transition-colors duration-300">WORKS</span>
            </Link>
          </li>
          <li>
            <Link href="/company" passHref>
              <span className="hover:text-foreground transition-colors duration-300">COMPANY</span>
            </Link>
          </li>
          <li>
            <Link href="/project" passHref>
              <span className="hover:text-foreground transition-colors duration-300">PROJECT</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span className="hover:text-foreground transition-colors duration-300">CONTACT</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Tombol menu di kanan (kita pindahkan dari LeftSidebar) */}
      <div className="flex-1 flex justify-end">
        {/* Tombol ini akan membuka sidebar */}
      </div>
    </header>
  );
};