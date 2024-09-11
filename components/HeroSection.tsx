import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-black text-white laptop:bg-hero-pattern desktop:bg-hero-pattern bg-contain bg-no-repeat bg-right">
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
      <div className="p-6 flex">
        <div
          className="
        mobile:w-full mobile:px-4 
        tablet:w-full tablet:px-8 
        mini-laptop:w-full mini-laptop:px-10 
        laptop:w-1/2 laptop:px-20 
        desktop:w-1/2 desktop:px-40"
        >
          <h1 className="mobile:text-2xl tablet:text-2xl text-4xl font-bold mb-4">
            &quot;CYSLABS TEAM | WE&apos;RE HIRING!.&quot;
          </h1>
          <p className="font-bold mobile:text-lg tablet:text-lg text-3xl mb-6 mt-6">
          </p>
          <p className="mb-6 mobile:text-medium mobile:text-center tablet:text-medium text-lg font-semibold">
            CysLabs is a R&D team dedicated to cybersecurity and blockchain. We
            currently building a dapp enables secure decentralized networks for
            web3 with share to earn economic.
          </p>
          <Link href="#" className="mobile:hidden">
            <Button
              color="primary"
              size="lg"
              radius="sm"
              className="hover:scale-110 transition duration-110 text-white font-bold"
            >
              Find out more
            </Button>
          </Link>
          <Link href="#" className="mobile:flex hidden justify-center p-4">
            <Button
              color="primary"
              size="lg"
              radius="sm"
              variant="solid"
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
