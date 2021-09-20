import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { SearchDealCard } from '../components/searchDealCard';
import { Map } from '../components/map';

export interface DealType {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

interface Props {
  searchResults: DealType[];
}

const Search: React.FC<Props> = ({ searchResults }) => {
  const router = useRouter();

  const formattedStartDate = format(new Date(router.query.startDate as string), 'dd MMMM yy');
  const formattedEndDate = format(new Date(router.query.endDate as string), 'dd MMMM yy');

  const range = `From ${formattedStartDate} to ${formattedEndDate}`;

  return (
    <div className="mx-auto">
      <Header />

      <main className="mx-auto w-full">
        <section className="space-y-4 pt-14 px-6">
          <div className="flex justify-between">
            <h3>300+ stays for {router.query.guestCount} number of guests!</h3>
            <span className="text-gray-400">{range}</span>
          </div>

          <h1 className="text-2xl font-semibold">Stays in {router.query.location}</h1>

          <div className="flex space-x-2 flex-wrap">
            <button className="button-outlined mb-2">Cancellation Flexibility</button>
            <button className="button-outlined mb-2">Type of Place</button>
            <button className="button-outlined mb-2">Price</button>
            <button className="button-outlined mb-2">Rooms and Beds</button>
            <button className="button-outlined mb-2">More filters</button>
          </div>
        </section>

        <section className="flex justify-center">
          <div className="space-y-4 px-6">
            {searchResults?.map((item) => (
              <SearchDealCard key={item.img} {...item} />
            ))}
          </div>
          <div className="hidden xl:inline-flex xl:min-w-[600px]">
            <Map searchRes={searchResults} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults: DealType[] = await fetch('https://links.papareact.com/isz').then((res) =>
    res.json(),
  );

  return {
    props: {
      searchResults,
    },
  };
}
