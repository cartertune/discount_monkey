export default function Home() {
  return (
    <div className="flex px-4 pt-6 lg:pt-10">
      {/* Hero Section */}
      <div>
        {/* left half */}
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl md:text-7xl lg:text-8xl">
            <span className="block text-pink-500">Grow your Brand</span>{' '}
            <span className="block ">with Apes &</span>
            <span className="block ">Punks</span>
          </h1>
          <p className="mt-3 px-2 text-lg font-semibold md:max-w-xl md:text-2xl lg:text-3xl">
            Provide exclusive deals{' '}
            <span className="opacity-75">
              and discounts to NFT communities like Bored Ape Yacht Club and
              CryptoPunks
            </span>
          </p>
        </div>
        {/* right half */}
        <div></div>
      </div>
    </div>
  )
}
