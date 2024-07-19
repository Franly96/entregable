import SearchInput from '@/components/SearchInput';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navtabs from '@/components/Navtabs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Library',
  description: 'take home for sennior UI developer',
};

export default function RootLayout({
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main-white`}>
        <main className="container max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl py-6 flex flex-col gap-8">
          {/* Top header */}
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold">Library</h1>
            <span>
              Browser for assets needed to report and present analysis
            </span>
          </div>
          {/* Search */}
          <SearchInput />
          {/* TABS */}
          <Navtabs />
          {children}
        </main>
      </body>
    </html>
  );
}
