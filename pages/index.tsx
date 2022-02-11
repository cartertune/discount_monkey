import { ChangeEvent, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Home() {
  const [emailInput, setEmailInput] = useState('')
  return (
    <div className="flex flex-col px-3 pt-14 lg:pt-24">
      {/* Hero Section */}
      <div className="w-full">
        {/* left half */}
        <div>
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl md:text-7xl lg:text-8xl">
            <span className="block text-pink-500">Grow your Brand</span>{' '}
            <span className="block ">with Apes &</span>
            <span className="block ">Punks</span>
          </h1>
          <p className="lg-mt-6 mt-3 px-2 text-lg font-semibold md:max-w-xl md:text-xl lg:text-2xl">
            Provide exclusive deals{' '}
            <span className="opacity-75">
              and discounts to NFT communities like Bored Ape Yacht Club and
              CryptoPunks
            </span>
          </p>
          <div className="mt-4 flex w-full md:w-3/4 lg:mt-6 lg:w-1/2">
            <div className="flex-grow pr-2">
              <Input
                placeholder="Enter Email..."
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmailInput(e.target?.value)
                }
                value={emailInput}
                className="text-md h-full w-full border-2 border-black px-3 sm:text-lg md:text-xl lg:px-5"
              />
            </div>
            <div className="relative">
              <Button
                onClick={() => console.log('partnering up!')}
                className="text-md border-2 border-pink-500 bg-pink-500 px-1 py-3 font-semibold text-white md:px-5 md:text-2xl"
              >
                Partner Up
              </Button>
              <p className="absolute w-full text-center text-xs lg:text-sm">
                <i>Coming Soon!</i>
              </p>
            </div>
          </div>
        </div>
        {/* right half */}
        <div></div>
      </div>
      {/* How it works section */}
      <div className="pt-12 lg:pt-20">
        <div className="w-full text-center">
          <h2 className="text-xl font-bold underline decoration-pink-500 lg:text-3xl">
            How it Works
          </h2>
        </div>
      </div>
    </div>
  )
}
