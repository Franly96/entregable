import Modal from '@/components/Modal';

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/kpi/` + id);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function KpiModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);
  console.log(data);
  return (
    <Modal type="kpi" title={data.title} description={data.description}>
      <div className="container bg-white p-4 justify-between leading-normal">
        <div className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.5"
            stroke="currentColor"
            className="bg-catskill-white border rounded-lg h-24 w-24"
          >
            <path
              d="M9 4L9 20M15 4L15 20M3 9H21M3 15H21M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z"
              stroke="#000000"
              stroke-width="0.648"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>

          <div className="flex flex-row justify-between p-4 leading-normal capitalize">
            <h1 className="text-2xl font-bold">{data.question || 'INTES'}</h1>
            <p className="capitalize">{data.type}</p>
          </div>
          <span className="text-sm">{data.description}</span>
        </div>
      </div>
    </Modal>
  );
}
