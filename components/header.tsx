import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

export const Header = () => {
  const router = useRouter();

  const [inputValue, selectInputValue] = useState('');
  const [numOfGuests, selectNumOfGuests] = useState(1);

  const handleGuests = (value: string) => {
    const regExp = /^[0-9]+$/;
    if (regExp.test(value)) {
      parseInt(value) && selectNumOfGuests(parseInt(value));
    }
  };

  const [startDate, selectStartDate] = useState(new Date());
  const [endDate, selectEndDate] = useState(new Date());

  const handleSubmit = (ranges) => {
    selectStartDate(ranges.selection.startDate);
    selectEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const resetForm = () => {
    selectStartDate(new Date());
    selectEndDate(new Date());
    selectNumOfGuests(1);
    selectInputValue('');
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: inputValue,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestCount: numOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-40 shadow-md bg-white p-5">
      <div className="grid grid-cols-3">
        {/* Logo section */}
        <div className="flex h-10 relative items-center my-auto">
          <Image
            onClick={() => router.push('/')}
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            className="cursor-pointer"
          />
        </div>

        {/* Search section */}
        <div className="flex items-center md:shadow-sm md:border-2 rounded-full py-2 placeholder-gray-400">
          <input
            value={inputValue}
            onChange={(e) => selectInputValue(e.currentTarget.value)}
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
      </div>

      {inputValue.length > 0 && (
        <div className="flex w-full">
          <div className="flex flex-col mx-auto mt-4 space-y-4">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              onChange={handleSubmit}
              rangeColors={['#FD5B61']}
            />

            <div className="flex justify-between items-center">
              <h3 className="text-lg text-gray-800 font-semibold">Number of guests</h3>

              <div className="flex">
                <UsersIcon className="h-6 w-6 mr-2" />
                <input
                  type="number"
                  value={numOfGuests}
                  onChange={(e) => handleGuests(e.currentTarget.value)}
                  className="w-12 outline-none text-red-400"
                />
              </div>
            </div>

            <div className="flex w-auto justify-stretch">
              <button
                onClick={resetForm}
                className="flex-grow text-lg text-gray-400 hover:bg-gray-100 rounded-full transition duration-300">
                Cancel
              </button>
              <button
                onClick={search}
                className="flex-grow text-lg text-red-400 font-bold hover:bg-gray-100 rounded-full h-12 transition duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
