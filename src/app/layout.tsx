import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import RootProvider from '@/provider/RootProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Hadi Bakhshi | Software Engineer',
  description: 'Want to know me better',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
