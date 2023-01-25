'use client';

import { Inter as FontSans } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import React from 'react';

import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ClientProvider } from '@/lib/trpc/trpc-client';
import { cn } from '@/lib/utils/classname';

import type { Session } from 'next-auth';

interface RootLayoutProps {
  children: React.ReactNode;
  session: Session | null;
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const RootLayout = (props: RootLayoutProps) => {
  console.log({ session: props.session });
  return (
    <ClientProvider>
      <html lang="en">
        <head />
        <body
          className={cn(
            'min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50',
            fontSans.variable
          )}
        >
          <SessionProvider session={props.session}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Header />
              <main className="flex h-full gap-8 bg-slate-50 pr-8">
                <ScrollArea>
                  <Sidebar />
                </ScrollArea>
                {props.children}
              </main>
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
    </ClientProvider>
  );
};

export default RootLayout;
