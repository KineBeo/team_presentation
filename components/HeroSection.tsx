import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-black text-white h-[400px] bg-hero-pattern bg-contain bg-no-repeat bg-right">
      <div className="bg-yellow-300 text-black py-2 text-center 
      mobile:text-sm 
      tablet:text-sm 
      text-md flex justify-center">
        <p className="font-bold underline">Save the date for AppWorld 2025 —February 25-27 in Las Vegas!</p>
      </div>
      <div className="p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="mobile:text-xl tablet:text-xl text-3xl font-bold mb-4">
            "F5 invented API security."
          </h1>
          <p className="font-bold mobile:text-sm tablet:text-sm text-2xl mb-6 mt-6">-Chris Steffen, EMA</p>
          <p className="mb-6 mobile:text-sm tablet:text-sm text-md font-semibold">
            Enterprise Management Associates (EMA) has named F5 as a Visionary
            in its recently published 2024 Vendor Vision report.
          </p>
          <Link href="#">
            <Button
              color="primary"
              size="md"
              radius="sm"
              className="hover:scale-110 transition duration-110 text-white font-bold"
            >
              Find out more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
