import {
  BsDatabaseFillCheck,
  BsFileEarmarkTextFill,
  BsFillCpuFill,
  BsGraphUp,
} from "react-icons/bs";
import FeatureCard from "./ui/FeatureCard";

const features = [
  {
    index: 0,
    title: "Persistent Data Storage",
    description: "Store your job application records persistenly with ease!",
    icon: <BsDatabaseFillCheck />,
  },
  {
    index: 1,
    title: "Detailed Record Entry",
    description:
      "Enter a detailed set of information for each job application you complete.",
    icon: <BsFileEarmarkTextFill />,
  },
  {
    index: 2,
    title: "Clean & Modern UI/UX",
    description:
      "Enjoy the performance and ease-of-access when using Career-Dock. We kept you in mind.",
    icon: <BsFillCpuFill />,
  },
  {
    index: 3,
    title: "Data Analytics & Dashboard",
    description:
      "Utilize your personalized user dashboard to gain greater insights on your job application journey!",
    icon: <BsGraphUp />,
  },
];

const Features = () => {
  return (
    <section className="w-full bg-zinc-800 p-8 h-[30vh] flex justify-center items-center">
      <div className="bg-zinc-900 w-full h-full rounded-md shadow-2xl">
        <div className="p-8">
          <h1 className="text-5xl text-center font-bold text-zinc-300 uppercase">
            Features
          </h1>
        </div>
        <div className="p-8 flex items-center justify-center gap-16">
          {features.map((feature) => (
            <FeatureCard
              key={feature.index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
