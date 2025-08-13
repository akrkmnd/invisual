// src/components/LeftSidebar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LeftSidebarProps {
  onOpen: () => void;
}

export const LeftSidebar = ({ onOpen }: LeftSidebarProps) => {
  return (
    <aside 
      className="fixed top-0 left-0 h-full w-24 p-8 flex flex-col justify-between items-center z-50 bg-transparent 
                 hover:bg-black hover:bg-opacity-80 transition-colors duration-700"
    >
      {/* Logo di atas */}
      <Link href="/" passHref>
        <span className="cursor-pointer">
          <Image src="/assets/logo.png" alt="Invisual Logo" width={32} height={32} className="opacity-70 hover:opacity-100 transition-opacity" />
        </span>
      </Link>

      {/* Tombol menu di tengah */}
      <button onClick={onOpen} className="text-2xl text-white hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      {/* Tautan Media Sosial Vertikal di bawah */}
      <div className="flex flex-col space-y-4">
        <Link href="https://www.instagram.com/invisual_studio" passHref>
          <span className="text-white text-xs opacity-50 cursor-pointer hover:opacity-100 hover:text-white transition-colors">IG</span>
        </Link>
        <Link href="https://www.linkedin.com/company/invisual" passHref>
          <span className="text-white text-xs opacity-50 cursor-pointer hover:opacity-100 hover:text-white transition-colors">LI</span>
        </Link>
        <Link href="https://www.behance.net/invisual" passHref>
          <span className="text-white text-xs opacity-50 cursor-pointer hover:opacity-100 hover:text-white transition-colors">BE</span>
        </Link>
      </div>
    </aside>
  );
};