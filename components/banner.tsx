import Image from 'next/image';

export const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" />

      <div className="absolute items-center text-center top-1/2 w-full">
        <p className="text-small sm:text-lg">This text is absolutely centred</p>

        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-lg active:scale-90 transition duration-150">
          Click me!
        </button>
      </div>
    </div>
  );
};
