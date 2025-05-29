import CTAPrimary from "./CTAPrimary";
import CTASecondary from "./CTASecondary";
import CTAThird from "./CTAThird";
// import { useNavigate } from "react-router-dom";

type RecordCardProps = {
  id: string;
  title: String;
  category: String;
  company: String;
  type: String;
  status: String;
  country: String;
  description: String;
  createdAt: String;
};

const RecordCard = (props: RecordCardProps) => {
  // const navigate = useNavigate();
  const createdAtDate = props.createdAt.substring(0, 10);
  const createdAtTime = props.createdAt.substring(11, 16);
  return (
    <div className="w-[700px] h-[350px] border-1 border-zinc-700 shadow-2xl rounded-md">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-4xl text-zinc-300">{props.title}</h1>
        <h2 className="text-2xl text-amber-500 truncate">{props.category}</h2>
      </div>
      <div className="flex items-center justify-between p-4 text-2xl text-zinc-500">
        <h1>{props.company}</h1>
        <h2>{props.type.toLocaleUpperCase()}</h2>
        <h3>{props.country}</h3>
      </div>
      <div className="p-4 text-lg text-zinc-300 truncate">
        <p>{props.description}</p>
      </div>
      <div className="p-4 flex items-center justify-between">
        <CTAPrimary label="View" />
        <CTASecondary label="Edit" recordId={props.id} />
        <CTAThird label="Delete" recordId={props.id} />
      </div>
      <div className="p-4 flex items-center justify-between cursor-default">
        <p className="text-lg text-zinc-500">
          <span className="font-semibold">Status: </span>
          {props.status.toLocaleUpperCase()}
        </p>
        <p className="text-md text-zinc-500">
          <span className="font-semibold">Created at: </span>
          {createdAtDate} | {createdAtTime}
        </p>
      </div>
    </div>
  );
};

export default RecordCard;
