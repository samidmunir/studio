type CTASecondaryProps = {
  label: string;
  recordId: string;
};

import { useNavigate } from "react-router-dom";

const CTASecondary = (props: CTASecondaryProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/record/edit/${props.recordId}`)}
      className="w-[200px] text-center text-lg text-emerald-500 font-bold border-2 border-emerald-500 px-4 py-2 rounded-md hover:bg-emerald-500 hover:text-zinc-900 transition-all shadhow-2xl"
    >
      {props.label}
    </button>
  );
};

export default CTASecondary;
