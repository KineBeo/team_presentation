import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-black text-white h-[400px] bg-hero-pattern bg-contain bg-no-repeat bg-right">
      <div
        className="bg-yellow-300 text-black py-2 text-center 
      mobile:text-md 
      tablet:text-md 
      text-lg flex justify-center"
      >
        <p className="font-bold underline">
          Save the date for AppWorld 2025 —February 25-27 in Las Vegas!
        </p>
      </div>
      <div className="p-6 flex flex-col mini-laptop:flex-row laptop:flex-row desktop:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="mobile:text-2xl tablet:text-2xl text-5xl font-bold mb-4">
            &quot;F5 invented API security.&quot;
          </h1>
          <p className="font-bold mobile:text-lg tablet:text-lg text-3xl mb-6 mt-6">
            -Chris Steffen, EMA
          </p>
          <p className="mb-6 mobile:text-medium tablet:text-medium text-lg font-semibold">
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
