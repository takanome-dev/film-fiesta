import { SessionProvider } from 'next-auth/react';

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

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: ComponentWithPageLayout) => (
  <SessionProvider session={session}>
    <main className="flex h-full gap-8 bg-slate-50 pr-8">
      <Component {...pageProps} />
    </main>
  </SessionProvider>
);

export default api.withTRPC(MyApp);
