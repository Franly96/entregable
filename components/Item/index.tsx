import Link from 'next/link';

type ItemProps = {
  type: string;
  title: string;
  description: string;
  date?: string;
  id?: string;
};
export default function Item({
  type,
  title,
  description,
  date,
  id,
}: ItemProps) {
  return (
    <Link
      className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow p-2"
      href={`/${type}/${id}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="0.5"
        stroke="currentColor"
        className="flex flex-2 bg-catskill-white h-24 border rounded-lg p-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
      <div className="flex flex-2 gap-1 flex-col justify-between p-4 leading-normal">
        <span className="text-sm font-bold">{title}</span>
        <span className="text-sm">{description}</span>
        {date ? <span className="text-xs">{date}</span> : null}
      </div>
    </Link>
  );
}
