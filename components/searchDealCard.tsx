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
    <div className="flex flex-col md:flex-row md:flex w-full cursor-pointer hover:bg-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-lg hover:opacity-80 transition duration-300">
      <div className="flex mb-4 md:mb-0 h-60 w-full md:w-96 mr-4 relative">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
      <div className="block flex-col w-full h-full max-h-full md:flex justify-between">
        <div className="flex w-full justify-between">
          <div className="space-y-2">
            <h4 className="text-sm text-gray-400">{location}</h4>
            <h2 className="text-xl font-bold">{title}</h2>
            <span className="bg-gray-200 h-0.5 w-24 flex"></span>
            <p className="text-sm">{description}</p>
          </div>
          <HeartIcon className="h-8" />
        </div>

        <div className="md:flex sm:block w-full mt-auto justify-between items-end">
          <div className="flex">
            <StarIcon className="h-6 text-red-400 mr-1" />
            <span>{star}</span>
          </div>
          <div className="space-y-2 text-right">
            <h3 className="text-2xl font-bold">{price}</h3>
            <span className="text-gray-400 text-lg">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
