'use client';

import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay untuk menangkap klik di luar sidebar */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100 bg-black/50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar itu sendiri */}
      <div
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-lg md:w-[40vw] z-[100] bg-white transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Konten Sidebar */}
        <div className="flex flex-col p-12 h-full justify-between text-black">
          <div className="flex justify-between items-center">
            {/* Logo Thinking Room */}
            <h1 className="text-2xl font-bold uppercase tracking-widest">
              <Link href="/" passHref>
                <span onClick={onClose} className="text-black">INVISUAL</span>
              </Link>
            </h1>
            {/* Teks di atas tombol close */}
            <h2 className="text-lg uppercase text-black/70">WE / THI.NGK LI.KE_WN</h2>
          </div>

          {/* Navigasi Utama */}
          <nav className="flex-1 flex flex-col justify-center items-start text-6xl uppercase space-y-6 font-bold mt-16">
            <Link href="/works" passHref><span onClick={onClose} className="hover:opacity-70 transition-opacity">Works</span></Link>
            <Link href="/company" passHref><span onClick={onClose} className="hover:opacity-70 transition-opacity">Company</span></Link>
            <Link href="/journal" passHref><span onClick={onClose} className="hover:opacity-70 transition-opacity">Journal</span></Link>
            <Link href="/contact" passHref><span onClick={onClose} className="hover:opacity-70 transition-opacity">Contact</span></Link>
          </nav>

          {/* Info Kontak & Media Sosial */}
          <div className="flex justify-between text-sm opacity-70 mt-auto">
            <div className="flex flex-col space-y-1">
              <span className="hover:underline transition-colors duration-300">Instagram</span>
              <span className="hover:underline transition-colors duration-300">LinkedIn</span>
              <span className="hover:underline transition-colors duration-300">Behance</span>
            </div>
            <div className="flex flex-col space-y-1 text-right">
              <span>Business:</span>
              <span className="hover:underline transition-colors duration-300">info@invisual.com</span>
              <span className="hover:underline transition-colors duration-300">+62 812 3456 7890</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};