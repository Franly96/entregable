import { default as Card, default as Item } from '@/components/card';
import DataSection from '@/components/DataSection';
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
  const {data} = await getData();

  const itemsMap =
    data &&
    data.map((item: any) => (
      <Card
        url={`/kpi/${item.id}`}
        key={item.id}
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
        footNote={item.updated}
      />
    ));
  return (
    <MainLayout>
      <Section title='Featured' description='Curated top picks from this week'>{itemsMap}</Section>
      <DataSection title='Featured' description='Data - Curated top picks from this week' />
    </MainLayout>
  );
}
