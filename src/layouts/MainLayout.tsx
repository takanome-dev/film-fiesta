import React from 'react';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex gap-8 h-full bg-slate-50 pr-8">
        <Sidebar />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
