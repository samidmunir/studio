import { useUser } from "../context/UserContext";
import LogoutButton from "./ui/LogoutButton";
import RecordCard from "./ui/RecordCard";

type Record = {
  _id: string;
  title: String;
  category: String;
  company: String;
  type: String;
  status: String;
  country: String;
  description: String;
  createdAt: String;
};

type UserPanelProps = {
  records: Record[];
};

const UserPanel = (props: UserPanelProps) => {
  const { user } = useUser();

  return (
    <section className="w-full bg-zinc-800 p-8 h-[80vh]">
      <div className="bg-zinc-900 w-full h-[30vh] rounded-md shadow-2xl flex items-center justify-between px-16">
        <div className="p-8">
          <h1 className="text-5xl text-zinc-300">
            Welcome, {""}
            <span className="text-amber-500 font-semibold">
              {user?.firstName} {user?.lastName[0]}.
            </span>
          </h1>
          <h2 className="text-3xl text-zinc-500 my-4">
            Total application records:{" "}
            <span className="text-zinc-300">{props.records.length}</span>
          </h2>
          <LogoutButton />
          <p className="mt-16 text-sm text-zinc-500">
            Track your metrics with ease using the user dashboard.
          </p>
        </div>
        <div className="p-8 w-[300px] h-[150px] border-2 border-zinc-700 bg-zinc-900 shadow-2xl rounded-md">
          <h1 className="text-2xl text-center font-semibold text-emerald-500">
            # of Accepted
          </h1>
        </div>
        <div className="p-8 w-[300px] h-[150px] border-2 border-zinc-700 bg-zinc-900 shadow-2xl rounded-md">
          <h1 className="text-2xl text-center font-semibold text-rose-500">
            # of Rejected
          </h1>
        </div>
        <div className="p-8 w-[300px] h-[150px] border-2 border-zinc-700 bg-zinc-900 shadow-2xl rounded-md">
          <h1 className="text-2xl text-center font-semibold text-amber-500">
            # of Closed
          </h1>
        </div>
      </div>
      <div className="bg-zinc-900 w-full h-[42vh] rounded-md shadow-2xl px-16 mt-8 overflow-y-scroll">
        <h1 className="text-4xl text-center my-8 font-semibold text-amber-500 uppercase">
          Your Application Records
        </h1>
        <div className="flex items-center flex-wrap gap-16 p-8">
          {props.records.map((record) => (
            <RecordCard
              id={record._id}
              title={record.title}
              category={record.category}
              company={record.company}
              type={record.type}
              status={record.status}
              country={record.country}
              description={record.description}
              createdAt={record.createdAt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserPanel;
