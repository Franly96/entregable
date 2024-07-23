import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};


export const metadata = {
  title: 'Something is wrong',
  description: 'Something is wrong',
};

export default function ErrorLayout({ children }: Props) {
  return (
    <div>
      {children}
      <Link href="/">Go back to home</Link>
    </div>
  );
}