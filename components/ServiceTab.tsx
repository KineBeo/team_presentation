"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, Switch } from "@nextui-org/react";
import ServiceCard from "./ServiceCard";

export default function App() {
  return (
    <div className="flex flex-col mt-8">
      <div className="justify-center flex text-6xl font-bold m-4 text-center">
        Secure Every App
      </div>
      <Tabs
        aria-label="Options"
        variant="underlined"
        className="flex justify-center font-bold m-6"
      >
        <Tab
          key="by_solution"
          title="By Solution Area"
          className="text-2xl mobile:text-xl tablet:text-xl m-2"
        >
          <div className="flex justify-center mt-4">
            <div
              className="grid grid-cols-1 gap-4
                        laptop:grid-cols-3 laptop:gap-5
                        desktop:grid-cols-3 desktop:gap-8 
                        m-4"
            >
              <ServiceCard
              cardWidth="350px"
                body_text="Web Application and API Protection"
                footer_text="Reduce risk and complexity so you can continue moving your business forward."
              />
              <ServiceCard
              cardWidth="350px"
                body_text="Secure Multicloud Networking"
                footer_text="Connect, secure, and manage apps and APIs across distributed multicloud and hybrid networks."
              />
              <ServiceCard
              cardWidth="350px"
                body_text="Application and Network Performance"
                footer_text="Increase availability and performance of your apps to optimize user experience"
              />
              <ServiceCard
              cardWidth="350px"
                body_text="Modern Application Delivery"
                footer_text="Meet customer demands and improve digital experiences."
              />
              <ServiceCard
              cardWidth="350px"
                body_text="Fraud and Abuse Prevention"
                footer_text="Protect against fraud while keeping apps available for legitimate users."
              />
              <ServiceCard
              cardWidth="350px"
                body_text="Zero Trust Security"
                footer_text="Prevent unauthorized access to your networks, applications, and APIs"
              />
            </div>
          </div>
        </Tab>
        <Tab
          key="by_industry"
          title="By Industry"
          className="text-2xl mobile:text-xl tablet:text-xl m-2"
        >
          <div className="flex justify-center mt-4">
            <div
              className="grid grid-cols-1 gap-4
                        laptop:grid-cols-3 laptop:gap-5
                        desktop:grid-cols-3 desktop:gap-8 
                        m-4"
            >
              <ServiceCard
              cardWidth="350px"
                body_text="Banking and Financial Services"
                footer_text="Digital transformation is redefining FinServ experiences to meet customer expectations."
              />
              <ServiceCard
              cardWidth="350px"
                body_text="Public Sector"
                footer_text="Mission success hinges on applications that deliver secure, dependable customer experiences."
              />
              <ServiceCard
              cardWidth="350px"
                body_text="Service Providers"
                footer_text="Distributed networks are essential for traffic volumes, speed, and reduced latency."
              />
              <ServiceCard
              cardWidth="350px"
                body_text="Healthcare"
                footer_text="Healthcare's digital transformation is accelerating and so are the cyberattacks against it. Unified fraud preventation is key."
              />
              <ServiceCard
              cardWidth="350px"
                body_text="Ecommerce"
                footer_text="Stop automated bot and human attacks from affecting customer experiences and sales"
              />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
