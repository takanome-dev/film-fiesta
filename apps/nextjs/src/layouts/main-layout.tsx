import React from "react";

import Footer from "~/components/footer";
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";
import { ScrollArea } from "~/components/ui/scroll-area";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [openMobileNav, setOpenMobileNav] = React.useState(false);

  return (
    <>
      <Header toggleMobileNav={() => setOpenMobileNav(!openMobileNav)} />
      <div className="flex-1 items-start bg-slate-50 dark:bg-slate-900 md:grid md:grid-cols-[70px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
        <aside className="fixed top-14 z-10 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-r-slate-100 bg-white dark:border-r-slate-700 dark:bg-slate-900 md:sticky md:block">
          <ScrollArea className="h-full">
            <Sidebar openNav={openMobileNav} setOpenNav={setOpenMobileNav} />
          </ScrollArea>
        </aside>
        <main className="relative px-4 py-6 md:px-0 md:pr-8 lg:py-10 lg:pr-10">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
