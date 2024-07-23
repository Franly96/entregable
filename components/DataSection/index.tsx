
import Chart from '@/components/charts/ChartsSelector';
import { data, options } from './dummyChartsData';

type Props = {
  title: string;
  description: string;
};

export default function DataSection({
  title,
  description,
}: Props) {
  const charts = [<Chart key="line" type='Line' options={options} data={data} />,
    <Chart key="scatter" type='Scatter' options={options} data={data} />
  ]

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <span>{description}</span>
      <div className="gap-6">{charts}</div>
    </section>
  );
}