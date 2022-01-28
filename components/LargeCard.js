import Image from 'next/image'

function LargeCard({ img, title, desc, buttonText }) {
  return (
    <section className="relative py-16">
      <div className="relative h-96 min-w-[300px] cursor-pointer">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="mb-3 w-64 text-4xl">{title}</h3>
        <p>{desc}</p>
        <button className="mt-5 rounded-full bg-gray-900 px-4 py-2 text-sm text-white">
          {buttonText}
        </button>
      </div>
    </section>
  )
}

export default LargeCard
