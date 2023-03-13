import Head from 'next/head';

import { env } from '@/env/client.mjs';
import { siteConfig } from '@/lib/config/site';

interface Props {
  noindex?: boolean;
  page?: string;
}

export default function Meta({ noindex, page }: Props) {
  const url = env.NEXT_PUBLIC_APP_URL;
  const ogUrl = new URL(`${url}/og-light.png`);

  return (
    <Head>
      <title>{`${page ?? 'Explore'} - ${siteConfig.name}`}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={siteConfig.description} />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/apple-touch-icon-57x57.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="apple-touch-icon-60x60.svg"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="196x196"
        href="/favicon-196x196.svg"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="128x128"
        href="/favicon-128x128.svg"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="96x96"
        href="/favicon-96x96.svg"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="32x32"
        href="/favicon-32x32.svg"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="16x16"
        href="/favicon-16x16.svg"
      />
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteConfig.name} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:url" content={url?.toString()} />
      <meta property="og:image" content={ogUrl.toString()} />
      <meta name="twitter:title" content={siteConfig.name} />
      <meta name="twitter:description" content={siteConfig.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url?.toString()} />
      <meta name="twitter:image" content={ogUrl.toString()} />
      <meta name="google" content="notranslate" key="notranslate" />
      {noindex && <meta name="robots" content="noindex" key="noindex" />}
    </Head>
  );
}
