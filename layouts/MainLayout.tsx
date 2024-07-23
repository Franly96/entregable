type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="h-full flex flex-col bg-var(--background)">{children}</div>
  );
}