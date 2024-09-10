import ServiceCard from "./ServiceCard";
import { GrGroup } from "react-icons/gr";
import { SiFlatpak } from "react-icons/si";
import { TbBrandMinecraft } from "react-icons/tb";
export default function DetailTab() {
  return (
    <div className="">
      <div className="text-center font-bold mobile:text-3xl tablet:text-3xl mini-laptop:text-4xl laptop:text-4xl desktop:text-4xl">
        <div
          className="m-6 p-4 
        tablet:p-6
        mini-laptop:p-7
        laptop:p-12
        desktop:p-16"
        >
          Threat Intel, Tech Details, and Peer Connections
        </div>
      </div>
      <div className="flex justify-center m-4">
        <div
          className="m-4 gap-4 
        mini-laptop:gap-8 
        laptop:gap-8 
        desktop:gap-8 
        grid grid-cols-1 mini-laptop:grid-cols-3 laptop:grid-cols-3 desktop:grid-cols-3"
        >
          <ServiceCard
            icon={<TbBrandMinecraft />}
            body_text="CysLabs"
            footer_text="Get the who, what, when, and what&apos;s next in cyberattacks to inform your security."
          />
          <ServiceCard
            icon={<SiFlatpak />}
            body_text="DevCentral"
            footer_text="The DevCentral user community is a place to share, connect, ask, and learn. about all things tech related."
          />
          <ServiceCard
            icon={<GrGroup />}
            body_text="Office of the CTO"
            footer_text="Explore our thought leaders&apos; strategic insights on trending topics like digital transformation, the future of app services, and the evolution toward an Al- assisted future."
          />
        </div>
      </div>
    </div>
  );
}
