import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import format from 'date-fns/format'
import InfoCard from '../components/InfoCard'

function search({ searchResults }) {
  // Destructures the query object from nextjs router into our own local variables
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query

  // Formats the dates from the destructured query object in nextjs router and outputs a readable string
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formattedStartDate} - ${formattedEndDate}`
  // Back-ticks for raw JS code to show range between dates

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>
          <div className="mb-5 hidden space-x-3 whitespace-nowrap lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img} // Currently don't have an identifier in the JSON
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default search

export async function getServerSideProps() {
  const searchResults = await fetch('https://jsonkeeper.com/b/5NPS').then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}
