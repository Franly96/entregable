import Modal from '@/components/Modal';

async function getData(id: string) {
  const res = await fetch('http://localhost:3000/api/kpi' + id);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function KpiPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);
  return (
    <Modal type="kpi" title={data.title} description={data.description}>
      <div className="container bg-white p-4"></div>
    </Modal>
  );
}
