
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-black text-white h-[500px] bg-hero-pattern bg-contain bg-no-repeat bg-right">
      <div className="bg-yellow-400 text-black py-2 text-center text-lg flex flex-row justify-center">
       <p className='font-bold underline'>
       Save the date for AppWorld 2025
       </p>
       <p>
       —February 25-27 in Las Vegas!
       </p>
      </div>
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">"F5 invented API security."</h1>
          <p className="font-bold text-3xl mb-6 mt-6">-Chris Steffen, EMA</p>
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
      </div>
    </section>
  );
}