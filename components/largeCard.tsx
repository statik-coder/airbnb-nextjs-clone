import Image from 'next/image';

interface Props {
  title: string;
  img: string;
  description: string;
  buttonText: string;
}

export const LargeCard: React.FC<Props> = ({ buttonText, description, img, title }) => {
  return (
    <div className="mt-8 relative mb-10">
      <div className="relative w-full h-80">
        <Image src={img} layout="fill" className="rounded-lg" objectFit="cover" />
      </div>

      <div className="absolute top-12 left-6">
        <h2 className="text-4xl mb-3">{title}</h2>
        <p className="mb-3">{description}</p>
        <button className="rounded-md bg-gray-900 px-4 py-2 text-white">{buttonText}</button>
      </div>
    </div>
  );
};
