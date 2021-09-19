import Image from 'next/image';
import { ExploreCard } from '../pages';

export const SmallCard = ({ distance, img, location }: ExploreCard) => {
  return (
    <div className="flex items-center space-x-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition duration-150 ease-out cursor-pointer">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};
