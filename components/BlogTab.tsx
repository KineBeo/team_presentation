import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
export default function BlogTab() {
  return (
    <div>
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between bg-hero-pattern bg-left bg-no-repeat">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="text-lg font-bold mb-4">
              2024 STATE OF AI APPLICATION STRATEGY REPORT
            </div>
            <p className="text-5xl mb-4 font-bold">
              18% of IT Budgets Today Are Allocated to AI
            </p>
            <p className="mb-6 font-bold text-lg">
              AI deployments are exploding, but few organizations are positioned
              for success. Explore the promises and pitfalls revealed by our
              research in the 2024 State of AI Application Strategy Report.
            </p>
            <Link href="#">
              <Button
                color="primary"
                size="lg"
                radius="sm"
                className="hover:scale-110 transition duration-110 border-gray-300 border-medium"
              >
                Get the report
              </Button>
            </Link>
          </div>
          {/* <div className="md:w-1/2">
            <Image width={1000} alt="" src="/images/HeroSection.png" />
          </div> */}
        </div>
      </section>
      <section>
        <div>

        </div>
        <div>
            
        </div>
      </section>
    </div>
  );
}
