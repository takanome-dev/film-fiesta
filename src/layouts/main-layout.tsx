import React from 'react';

import Sidebar from '@/components/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-full gap-8">
    <ScrollArea>
      <Sidebar />
    </ScrollArea>
    {children}
  </div>
);

export default MainLayout;
