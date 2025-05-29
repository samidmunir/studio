type FeatureCardProps = {
  title: String;
  icon: React.ReactElement;
  description: String;
};

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="border-1 border-zinc-700 bg-zinc-800 p-8 w-[500px] h-[150px] rounded-md shadow-md hover:scale-105 hover:shadow-amber-500 transition-all cursor-default">
      <div>
        <h1 className="text-3xl text-amber-500 font-semibold flex items-center gap-4">
          {props.title}
          <span>{props.icon}</span>
        </h1>
      </div>
      <div className="py-2">
        <p className="text-xl text-zinc-300">{props.description}</p>
      </div>
      <div></div>
    </div>
  );
};

export default FeatureCard;
