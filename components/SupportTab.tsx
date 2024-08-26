import ServiceCard from "./ServiceCard";

export default function SupportTab() {
  return (
    <div className="">
      <div className="text-center font-bold mobile:text-3xl tablet:text-3xl mini-laptop:text-4xl laptop:text-4xl desktop:text-4xl">
        <div
          className="
          m-6 p-4 
        tablet:p-6
        mini-laptop:p-8
        laptop:p-10
        desktop:p-12"
        >
          Support, Account Management, and Partner Resources
        </div>
      </div>
      <div className="flex justify-center m-4">
        <div
          className="m-4 gap-4 
        mini-laptop:gap-8 
        laptop:gap-8 
        desktop:gap-8 
        grid grid-cols-1 mini-laptop:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2"
        >
          <ServiceCard
            cardWidth="350px"
            body_text="MyF5"
            footer_text="One place to get support and manage your software subscriptions and BIG-IP VE registration keys."
          />
          <ServiceCard
            cardWidth="350px"
            body_text="Partner Central"
            footer_text="Sales and marketing resources and support for F5 partners."
          />
        </div>
      </div>
    </div>
  );
}
