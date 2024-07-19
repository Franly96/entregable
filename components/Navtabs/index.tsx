'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { id: 'home', label: 'Featured', url: '/' },
  { id: 'kpi', label: 'KPI', url: '/kpi' },
  { id: 'layouts', label: 'Layouts', url: '/layouts' },
  { id: 'storyboards', label: 'Storyboards', url: '/storyboards' },
];

export default function Navtabs(props: any) {
  const pathName = usePathname();
  const navLinks = tabs.map((tab) => {
    const isActive = pathName == tab.url;

    return (
      <Link
        href={tab.url}
        key={tab.id}
        className={`flex-1  p-1 text-center
        ${isActive ? 'rounded bg-white font-bold' : ''}`}
      >
        {tab.label}
      </Link>
    );
  });

  return (
    <ul className="flex flex-row justify-around bg-catskill-white border p-1 text-sm text-black-900 border border-gray-300 rounded-lg">
      {navLinks}
    </ul>
  );
}
