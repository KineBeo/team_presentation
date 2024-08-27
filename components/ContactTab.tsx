import ContactCard from "./ContactCard";
import { TbSettingsShare } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { PiHandCoinsLight } from "react-icons/pi";

export default function ContactTab() {
  return (
    <div>
      <div className="text-center font-bold mobile:text-3xl tablet:text-3xl mini-laptop:text-4xl laptop:text-4xl desktop:text-4xl">
        <div
          className="
          m-6 p-4 
        tablet:p-6
        mini-laptop:p-8
        laptop:p-10
        desktop:p-12"
        >
          Next Steps
        </div>
      </div>
      <div className="flex justify-center m-4">
        <div className="gap-4 grid grid-cols-1 mini-laptop:grid-cols-3 laptop:grid-cols-3 desktop:grid-cols-3">
          <ContactCard
            icon={<TbSettingsShare />}
            body_text="Start a free trial"
            button_text="Get a free trial"
            footer_text="Experience F5 in action by testing our products in your pre- production environment."
          />
          <ContactCard
            icon={<MdSupportAgent />}
            body_text="Contact us"
            button_text="Contact F5"
            footer_text="We can assess your needs and connect you with the right cloud provider, reseller partner, or F5 sales engineer."
          />
          <ContactCard
            icon={<PiHandCoinsLight />}
            body_text="Find a reseller"
            button_text="Find a partner"
            footer_text="We&apos;re dedicated to building partnerships that drive your business forward."
          />
        </div>
      </div>
    </div>
  );
}
