import Head from 'next/head';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Container } from '../components/container';
import { Explore } from '../components/explore';
import { Dwelling } from '../components/dwelling';
import { LargeCard } from '../components/largeCard';
import { Footer } from '../components/footer';

export interface ExploreCard {
  img: string;
  location: string;
  distance: string;
}

export interface MediumCard {
  img: string;
  title: string;
}

interface Props {
  exploreData: ExploreCard[];
  mediumCardsData: MediumCard[];
}

export default function Home({ exploreData, mediumCardsData }: Props) {
  return (
    <div className="mx-auto">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <Container>
        <Explore exploreData={exploreData} />
        <Dwelling data={mediumCardsData} />
        <LargeCard
          buttonText="Get Inspired"
          description="Wishlist curated by AirBnb"
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
        />
      </Container>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData: ExploreCard[] = await fetch('https://links.papareact.com/pyp').then((res) =>
    res.json(),
  );

  const mediumCardsData: MediumCard[] = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json(),
  );

  return {
    props: {
      exploreData,
      mediumCardsData,
    },
  };
}
