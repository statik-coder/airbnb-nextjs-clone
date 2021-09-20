import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { DealType } from '../pages/search';

export const SearchDealCard = ({
  description,
  img,
  lat,
  location,
  long,
  price,
  star,
  title,
  total,
}: DealType) => {
  return (
    <div className="flex w-full cursor-pointer h-48 hover:bg-gray-100 p-4 rounded-2xl">
      <div className="flex h-48 w-96 mr-4 relative">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
      <div className="flex-col w-full h-full max-h-full flex justify-between">
        <div className="flex w-full justify-between">
          <div className="space-y-2">
            <h4 className="text-sm text-gray-400">{location}</h4>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
          <HeartIcon className="h-8" />
        </div>

        <div className="flex w-full mt-auto justify-between items-end">
          <div className="flex">
            <StarIcon className="h-6 text-red-400 mr-1" />
            <span>{star}</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
