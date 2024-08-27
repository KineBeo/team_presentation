import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
export default function BlogTab() {
  return (
    <div>
      <section className="bg-black text-white bg-blog-pattern bg-contain bg-no-repeat bg-right mini-laptop:m-4 laptop:m-6 desktop:m-6">
        <div className="mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mobile:w-full tablet:w-5/6 w-1/2 mb-8">
            <div className="mobile:text-md tablet:text-md text-lg font-bold mb-4">
              2024 STATE OF AI APPLICATION STRATEGY REPORT
            </div>
            <p className="mobile:text-2xl tablet:text-2xl text-4xl mb-4 font-bold">
              18% of IT Budgets Today Are Allocated to AI
            </p>
            <p className="mb-6 font-semibold mobile:text-lg tablet:text-lg text-xl">
              AI deployments are exploding, but few organizations are positioned
              for success. Explore the promises and pitfalls revealed by our
              research in the 2024 State of AI Application Strategy Report.
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-row mobile:flex-col justify-center items-stretch gap-4 m-4">
        <section className="bg-black w-1/2 mobile:w-full text-black bg-blog-pattern-3 bg-contain bg-no-repeat bg-right flex-1">
          <div className="w-full h-full flex items-center p-8">
            <div className="mobile:w-4/5 tablet:w-3/4 mini-laptop:w-3/4 laptop:w-4/5 desktop:w-3/5 opacity-90 bg-white p-4">
              <div className="text-4xl mobile:text-lg tablet:text-lg mini-laptop:text-2xl font-bold">
                NGINX One: A SaaS Solution for Modern App Management and
                Delivery
              </div>
              <p className="text-lg text-blue-500 mt-2">Read the blog</p>
            </div>
          </div>
        </section>

        <section className="bg-black w-1/2 mobile:w-full text-black bg-blog-pattern-2 bg-auto bg-no-repeat bg-right flex-1">
          <div className="w-full h-full flex items-center p-8">
            <div className="mobile:w-4/5 tablet:w-3/4 mini-laptop:w-3/4 laptop:w-4/5 desktop:w-3/5 opacity-90 bg-white p-4">
              <div className="text-4xl mobile:text-lg tablet:text-lg mini-laptop:text-2xl font-bold">
                NGINX One: A SaaS Solution for Modern App Management and
                Delivery
              </div>
              <p className="text-lg text-blue-500 mt-2">Read the blog</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
