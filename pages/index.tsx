export default function Home() {
  return (
    <div className="flex px-4">
      {/* Hero Section */}
      <div>
        {/* left half */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-pink-500">Grow your Brand</span>{' '}
            <span className="block ">with Apes & Punks</span>
          </h1>
          <p className="mt-3 max-w-lg px-2 text-xl font-semibold">
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
