// components/HeroSection.js
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-black text-white">
      <div className="bg-yellow-400 text-black py-2 text-center">
        Save the date for AppWorld 2025—February 25-27 in Las Vegas!
      </div>
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">"F5 invented API security."</h1>
          <p className="text-xl mb-4">-Chris Steffen, EMA</p>
          <p className="mb-6">
            Enterprise Management Associates (EMA) has named F5 as a Visionary in its recently
            published 2024 Vendor Vision report.
          </p>
          <Link href="#">
            <Button color='primary' size='lg' radius='sm' className='hover:scale-110 transition duration-110 text-white font-bold'> 
                Find out more
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2">
         <Image width={1000} alt='' src='/images/HeroSection.png'/>
        </div>
      </div>
      {/* <div className="text-center py-8">
        <h2 className="text-3xl font-bold">Secure Every App</h2>
      </div>
      <div className="flex justify-center pb-8">
        <button className="px-4 py-2 border-b-2 border-blue-600 mr-4">By Solution Area</button>
        <button className="px-4 py-2">By Industry</button>
      </div> */}
    </section>
  );
}