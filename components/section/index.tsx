type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  description,
  children
}: Props) {
  return (
    <section className="mb-10 mt-8">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <span className="text-gray-600 mb-12">{description}</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
    </section>
  );
}
