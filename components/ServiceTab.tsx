"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, Switch } from "@nextui-org/react";
import ServiceCard from "./ServiceCard";
import { IoLogoAppleAr } from "react-icons/io5";
import { IoCloudDoneOutline } from "react-icons/io5";
import { GrDocumentPerformance } from "react-icons/gr";
import { GoShieldCheck } from "react-icons/go";
import { MdOutlineFingerprint } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { PiHeartbeat } from "react-icons/pi";
import { BsCart4 } from "react-icons/bs";
import Link from "next/link";

export default function App() {
  return (
    <div className="flex flex-col mt-8">
      <div className="justify-center flex mobile:text-3xl tablet:text-3xl text-5xl font-bold m-4 text-center">
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
          className="text-2xl mobile:text-lg tablet:text-lg m-2"
        >
          <div className="flex justify-center mt-4">
            <div
              className="grid grid-cols-1 gap-4
                        laptop:grid-cols-3 laptop:gap-5
                        desktop:grid-cols-3 desktop:gap-8 
                        m-4"
            >
              <Link href="what-we-do/product-development">
                <ServiceCard
                  icon={<IoLogoAppleAr />}
                  body_text="Blockchain/ Security product Development"
                  footer_text="Reduce risk and complexity so you can continue moving your business forward."
                />
              </Link>
              <Link href="what-we-do/blockchain-security">
                <ServiceCard
                  icon={<IoCloudDoneOutline />}
                  body_text="Blockchain Security audit"
                  footer_text="Connect, secure, and manage apps and APIs across distributed multicloud and hybrid networks."
                />
              </Link>
              <Link href="what-we-do/security-research">
                <ServiceCard
                  icon={<GrDocumentPerformance />}
                  body_text="Cyber Security Research"
                  footer_text="Increase availability and performance of your apps to optimize user experience"
                />
              </Link>
              <Link href="what-we-do/threat-hunting">
                <ServiceCard
                  icon={<GoShieldCheck />}
                  body_text="Threat Intelligence & Threat Hunting"
                  footer_text="Meet customer demands and improve digital experiences."
                />
              </Link>
              <Link href="what-we-do/incident-response">
                <ServiceCard
                  icon={<MdOutlineFingerprint />}
                  body_text="Incident Response & Forensics"
                  footer_text="Protect against fraud while keeping apps available for legitimate users."
                />
              </Link>
              <Link href="what-we-do/malware-analyze">
                <ServiceCard
                  icon={<MdSecurity />}
                  body_text="Malware Analysis"
                  footer_text="Prevent unauthorized access to your networks, applications, and APIs"
                />
              </Link>
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
                icon={<BsBank />}
                body_text="Banking and Financial Services"
                footer_text="Digital transformation is redefining FinServ experiences to meet customer expectations."
              />
              <ServiceCard
                icon={<IoLogoAppleAr />}
                body_text="Public Sector"
                footer_text="Mission success hinges on applications that deliver secure, dependable customer experiences."
              />
              <ServiceCard
                icon={<TfiWorld />}
                body_text="Service Providers"
                footer_text="Distributed networks are essential for traffic volumes, speed, and reduced latency."
              />
              <ServiceCard
                icon={<PiHeartbeat />}
                body_text="Healthcare"
                footer_text="Healthcare's digital transformation is accelerating and so are the cyberattacks against it. Unified fraud preventation is key."
              />
              <ServiceCard
                icon={<BsCart4 />}
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
