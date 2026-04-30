import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Boost33 — Brand Strategy',
  description: 'Brand Strategy document prepared by Onepct for Boost33.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
