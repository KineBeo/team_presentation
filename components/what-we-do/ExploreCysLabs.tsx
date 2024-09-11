import Image from "next/image";
import react from "react";
import ExploreCysLabsSection, {
  exploreCysLabsProps,
} from "./ExploreCysLabsSection";

const ExploreCysLabs: React.FC<{ data: exploreCysLabsProps[] }> = ({
  data,
}) => {
  if (!data || !Array.isArray(data)) {
    console.error("Benefits data is not valid");
    return null;
  }
  return (
    <div>
      {data.map((ele, index) => (
        <ExploreCysLabsSection
          key={index} // Adding a unique key for each element
          title={ele.title}
          description={ele.description}
          imageSrc={ele.imageSrc}
          learnMoreLink={ele.learnMoreLink}
          imagePosition={ele.imagePosition}
        />
      ))}
    </div>
  );
};
export default ExploreCysLabs;
