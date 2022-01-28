import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export async function getStaticProps() {
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

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          {/* API endpoints */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            xl:grid-cols-4"
          >
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
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          desc="Mediocre lists curated by Notbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  )
}
