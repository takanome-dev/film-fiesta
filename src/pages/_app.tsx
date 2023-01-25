import { Inter as FontSans } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

import Header from '@/components/header';
// import { cn } from '@/lib/utils/classname';
import { api } from '@/utils/api';

import type { AppPropsType } from 'next/dist/shared/lib/utils';
import type { Session } from 'next-auth';

import '../styles/globals.css';

type ComponentWithPageLayout = AppPropsType & {
  Component: AppPropsType['Component'] & {
    PageLayout?: React.ComponentType<any>;
  };
  pageProps: AppPropsType['pageProps'] & {
    session: Session | null;
  };
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: ComponentWithPageLayout) => (
  <SessionProvider session={session}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <main className={fontSans.variable}>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </main>
    </ThemeProvider>
  </SessionProvider>
);

export default api.withTRPC(MyApp);
