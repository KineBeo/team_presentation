import ServiceCard from "./ServiceCard";
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
            cardWidth="350px"
            body_text="F5 Labs"
            footer_text="Get the who, what, when, and what's next in cyberattacks to inform your security."
          />
          <ServiceCard
            cardWidth="350px"
            body_text="DevCentral"
            footer_text="The DevCentral user community is a place to share, connect, ask, and learn. about all things tech related."
          />
          <ServiceCard
            cardWidth="350px"
            body_text="Office of the CTO"
            footer_text="Explore our thought leaders' strategic insights on trending topics like digital transformation, the future of app services, and the evolution toward an Al- assisted future."
          />
        </div>
      </div>
    </div>
  );
}
// screens: {
//     mobile: {
//       min: "100px",
//       max: "550px",
//     },
//     tablet: {
//       min: "550px",
//       max: "750px",
//     },
//     "mini-laptop": {
//       min: "750px",
//       max: "874px",
//     },
//     laptop: {
//       min: "874px",
//       max: "1280px",
//     },
//     desktop: {
//       min: "1280px",
//     },
//     'sm': '640px',
//     'md': '768px',
//     'lg': '1024px',
//     'xl': '1280px',
//     '2xl': '1536px',
//   },
