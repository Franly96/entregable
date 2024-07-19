import Item from '@/components/Item';

async function getData() {
  const res = await fetch('http://localhost:3000/api/kpi');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  const itemsMap =
    data &&
    data.items.map((item: any) => (
      <Item
        type="kpi"
        key={item.question}
        title={item.question}
        description={item.description}
        date={item.updated}
        id={item.id}
      />
    ));
  return (
    <div className="container max-w-sm sm:max-w-md md:max-w-lg  lg:max-w-xl xl:max-w-2xl py-6 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Featured</h1>
        <span>Curated top picks from this week</span>
        <div className="flex flex-wrap gap-2">{itemsMap}</div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Trending</h1>
        <span>Most Popular by community</span>
        <div className="flex flex-wrap gap-2">{itemsMap}</div>
      </div>
    </div>
  );
}
