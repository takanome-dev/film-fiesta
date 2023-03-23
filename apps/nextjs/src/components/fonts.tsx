import {
  Inter as FontSans,
  JetBrains_Mono as FontMono,
} from '@next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export function Fonts() {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <style jsx global>{`
      :root {
        --font-sans: ${fontSans.style.fontFamily};
        --font-mono: ${fontMono.style.fontFamily};
      }
    `}</style>
  );
}
