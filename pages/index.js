import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

// getStaticProps will return props for the JSON sets.
export async function getStaticProps() {
  // cardsData and exploreData are fetched from an external JSON API - then are converted in a readable JSON format for JS.
  const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').then((res) =>
    res.json()
  )

  const cardsData = await fetch('https://jsonkeeper.com/b/VHHT').then((res) =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}

// Destructure the exploreData and cardsData JSON object
export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Notbnb - the Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            xl:grid-cols-4"
          >
            {/* Further destructure the exploreData object into its specific keys*/}
            {/* Map through the exploreData object and places each result with their corresponding key:values in an smallCard */}
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>

          <div className="-ml-3 flex space-x-3 overflow-scroll p-3 scrollbar-hide">
            {/* Further destructure the cardsData object into its specific keys*/}
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Great Outdoors"
          desc="Mediocre lists curated by Notbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  )
}
