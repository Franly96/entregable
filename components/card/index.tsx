import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  footNote: string;
  imageUrl: string;
  url: string;
};

export default function Card({
  title,
  description,
  imageUrl,
  footNote,
  url
}: Props) {
  return (
    <Link
      href={url}
    >
      <div
        className="flex p-5 bg-white rounded-lg border border-gray-200 cursor-pointer"
      >
        <div className="flex-shrink-0 w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
          <img src={imageUrl} className="" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="text-gray-400 text-sm">{footNote}</p>
        </div>
      </div>
    </Link>
  );
}
