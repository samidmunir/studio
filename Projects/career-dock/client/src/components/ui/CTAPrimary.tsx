type CTAPrimaryProps = {
  label: string;
};

const CTAPrimary = (props: CTAPrimaryProps) => {
  return (
    <button className="w-[200px] text-center text-lg text-amber-500 font-bold border-2 border-amber-500 px-4 py-2 rounded-md hover:bg-amber-500 hover:text-zinc-900 transition-all shadow-2xl">
      {props.label}
    </button>
  );
};

export default CTAPrimary;
