import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white p-5">
      {/* Logo section */}
      <div className="flex h-10 relative items-center my-auto cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Search section */}
      <div className="flex items-center md:shadow-sm md:border-2 rounded-full py-2 placeholder-gray-400">
        <input
          className="flex bg-transparent outline-none items-center flex-grow text-gray-600 pl-5"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex bg-red-400 text-white cursor-pointer h-8 rounded-full p-2 md:mx-2" />
      </div>

      {/* Menu section */}
      <div className="flex space-x-4 justify-end items-center text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};
