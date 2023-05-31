import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

interface Props {
  children: ReactNode;
}

export default async function LocaleLayout({ children }: Props) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
