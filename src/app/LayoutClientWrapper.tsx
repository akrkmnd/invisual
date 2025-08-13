// src/app/LayoutClientWrapper.tsx
'use client';

import { useState } from 'react';
import { Header } from "../components/Header";
import { LeftSidebar } from "../components/LeftSidebar";
import { Sidebar } from "../components/Sidebar";

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <LeftSidebar onOpen={toggleSidebar} />
      <Header /> {/* Memanggil kembali komponen Header */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      
      <div className="relative">
        {children}
      </div>
    </>
  );
}