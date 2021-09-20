import { MediumCard as MediumCardType } from '../pages';
import Image from 'next/image';

export const MediumCard: React.FC<MediumCardType> = ({ img, title }) => {
  return (
    <div className="hover:scale-105 cursor-pointer transform transition duration-150 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h2 className="font-semibold mt-2 text-2xl">{title}</h2>
    </div>
  );
};
