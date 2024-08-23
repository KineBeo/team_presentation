import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
export default function BlogTab() {
  return (
    <div>
      <section className="bg-black text-white bg-blog-pattern bg-contain bg-no-repeat bg-right m-4">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
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
        </div>
      </section>
      <section className="flex flex-row justify-center items-center gap-4 m-4 h-[400px]">
        <section className="bg-black w-1/2 text-black bg-blog-pattern-3 bg-contain bg-no-repeat bg-right h-full">
          <div>
            <div className="px-4 py-12 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/5 mb-8 md:mb-0 bg-white">
                <div className="p-8">
                  <div className="text-4xl mb-4 font-bold">
                    NGINX One: A SaaS Solution for Modern App Management and
                    Delivery
                  </div>
                  <p className="mb-6 font-bold text-lg">Read the blog</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black w-1/2 text-black bg-blog-pattern-2 bg-auto bg-no-repeat bg-right h-full">
          <div>
            <div className="px-4 py-12 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/5 mb-8 md:mb-0 bg-white">
                <div className="p-8">
                  <p className="text-4xl mb-4 font-bold">
                    Generative AI & Emerging Data Type Impact App Architecture
                  </p>
                  <p className="mb-6 font-bold text-lg">
                    See what Lori MacVittie has to say
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
