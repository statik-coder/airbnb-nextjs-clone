import { ExploreCard } from '../pages';
import { SmallCard } from './smallCard';

interface Props {
  exploreData: ExploreCard[];
}

export const Explore: React.FC<Props> = ({ exploreData }) => {
  return (
    <section className="pt-6 mb-12">
      <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {exploreData?.map((item) => (
          <SmallCard key={item.img} {...item} />
        ))}
      </div>
    </section>
  );
};
