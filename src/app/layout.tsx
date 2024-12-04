import type { Metadata, Viewport } from 'next';
import './globals.scss';
import RootProvider from '@/provider/RootProvider';
import { Roboto } from 'next/font/google';
// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });
const roboto = Roboto({
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hadi Bakhshi | Software Engineer',
  description: 'Hadi Bakhshi personal portfolio',
  keywords: [
    'Software engineer',
    'Full-stack developer',
    'Front-end developer',
    '.Net Developer',
    'Dotnet',
    'Engineer',
    'Developer',
    'portfolio',
  ],
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  // maximumScale: 1.0,
  // userScalable: false,
  // viewportFit: 'cover',
  themeColor: '#2151DA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
