import React from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <div className="flex-1 items-start md:grid md:grid-cols-[70px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
      <aside className="fixed top-14 z-10 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-r-slate-100 bg-slate-50 dark:border-r-slate-700 dark:bg-slate-900 md:sticky md:block">
        <ScrollArea className="h-full">
          <Sidebar />
        </ScrollArea>
      </aside>
      <main className="relative mx-4 py-6 md:mx-0 md:mr-8 lg:mr-10 lg:py-10">
        {children}
      </main>
    </div>
    <Footer />
  </>
);

export default MainLayout;
