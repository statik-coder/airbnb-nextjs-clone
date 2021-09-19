import { MediumCard as MediumCardType } from '../pages';
import { MediumCard } from '../components/mediumCard';

interface Props {
  data: MediumCardType[];
}

export const Dwelling: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>

      <div className="flex overflow-scroll space-x-4 scrollbar-hide p-3">
        {data?.map((item) => (
          <MediumCard key={item.img} {...item} />
        ))}
      </div>
    </div>
  );
};
