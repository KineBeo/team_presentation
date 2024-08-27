"use client";
import React from "react";
import TopicCard from "./TopicCard";
export default function TopicTab() {
  return (
    <div className="mobile:p-3 p-4">
      <div className="mobile:m-4 m-4">
        <div className="flex justify-center font-bold text-4xl laptop:text-5xl desktop:text-5xl">
          Trending Topics
        </div>
        <div className="flex justify-center mobile:p-4 tablet:p-4 mini-laptop:p-4">
          <div className="grid grid-cols-1 laptop:grid-cols-3 desktop:grid-cols-3">
            <TopicCard
              background="/images/image-2.png"
              category="blog"
              title="At F5, Ridiculously Easy App Security and Delivery Is Our Guiding Light"
              description="Seven years ago, F5 was a data center load- balancing specialist, and close to 90% of our product revenues came from perpetual hardware sales into on-prem environments. It&apos;s clear today that distributed architectures are the new standard-whether businesses have planned for it or not."
            />
            <TopicCard
              category="blog"
              background="/images/topic2.png"
              title="How F5 Is Unlocking the Power of Al"
              description="At AppWorld 2024, we announced the F5 Al Data Fabric, a new data platform to deliver on the promise of Al. This innovation is a big step toward putting Al to work to deliver better app and API protection, more quickly, and with a ridiculously easy experience for users."
            />
            <TopicCard
              category="blog"
              background="/images/topic3.png"
              title="F5 Is Shifting Left to Protect APIs"
              description="All day every day, APIs power the apps we use to purchase our coffee, badge into the door at the office, grab a rideshare, check the weather, and finally sit down at the end of a long day to stream a beloved TV show. Nearly every organization that we interact with daily relies on APIs to drive their digital business."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
