import Header from '@/components/header';
import Navtabs from '@/components/navtabs';
import SearchInput from '@/components/searchbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Library',
  description: 'take home for sennior UI developer',
};

type Props = {
  modal?: React.ReactNode;
  children: React.ReactNode;
}

export default function RootLayout({
  modal,
  children,
}: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main-white min-h-screen bg-gray-50 py-10`}>
        <main className="container mx-auto xl:px-60 px-10">
          {/* Top header */}
          <Header/>
          {/* Search */}
          <SearchInput />
          {/* TABS */}
          <Navtabs />
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
