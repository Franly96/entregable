import Card from '@/components/card';
import Section from '@/components/section';
import MainLayout from '@/layouts/MainLayout';

async function getData() {
  const res = await fetch('http://localhost:3000/api/kpi');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const { data } = await getData();

  const itemsMap =
    data &&
    data.map((item: any, index: number) => (
      <Card
        url={`/kpi/${item.id}`}
        key={item.id + index}
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
        footNote={item.updated}
      />
    ));
  return (
    <MainLayout>
      <Section title='Featured' description='Curated top picks from this week'>{itemsMap}</Section>
      <Section title='Trending' description='Most popular by community'>{itemsMap}</Section>
    </MainLayout>
  );
}
