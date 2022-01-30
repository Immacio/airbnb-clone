import Image from 'next/image'

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://cdn.dribbble.com/users/257709/screenshots/5257468/next_gen-land_1_4x.png"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-xl font-bold text-white sm:text-2xl lg:text-4xl">
          Indecisive? Let us help you out.
        </p>
        <button className="my-6 cursor-pointer rounded-full bg-white px-5 py-2 font-bold text-purple-500 shadow-md transition duration-150 hover:scale-105 hover:shadow-lg active:scale-90 lg:px-10 lg:py-4">
          Take me anywhere
        </button>
      </div>
    </div>
  )
}

export default Banner
