import React from "react";
import type { AppPropsType } from "next/dist/shared/lib/utils";
import Router from "next/router";
import { Inter as FontSans } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
import { Toaster } from "react-hot-toast";

import { api } from "~/lib/utils/api";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-slideshow-image/dist/styles.css";
import "../styles/nprogress.css";

type ComponentWithPageLayout = AppPropsType & {
  Component: AppPropsType["Component"] & {
    PageLayout?: React.ComponentType<any>;
  };
  pageProps: AppPropsType["pageProps"] & {
    session: Session | null;
  };
};

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: ComponentWithPageLayout) => (
  <SessionProvider session={session}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={fontSans.variable}>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </div>
      <Analytics />
      <Toaster
        position="top-right"
        containerStyle={{
          top: 60,
        }}
      />
    </ThemeProvider>
  </SessionProvider>
);

export default api.withTRPC(MyApp);
