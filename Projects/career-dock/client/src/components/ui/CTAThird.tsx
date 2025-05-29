import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

type CTAThirdProps = {
  label: string;
  recordId: string;
};

const CTAThird = (props: CTAThirdProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDelete = async (recordId: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/record/${recordId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        // alert("DELETION ERRROR");
        toast.error("Failed to delete.", {
          autoClose: 3000,
          theme: "dark",
        });
        return;
      }
      // alert("deletion success");
      toast.success("Record deleted succesfully.", {
        autoClose: 3000,
        theme: "dark",
      });
      // setTimeout(() => toast.success("Record deleted successfully."), 2000);
      // navigate("/dashboard");
      setTimeout(() => window.location.reload(), 4000);
      // window.location.reload();
      // fetchRecords();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <button
      onClick={() => handleDelete(props.recordId)}
      className="w-[200px] text-center text-lg text-sky-500 font-bold border-2 border-sky-500 px-4 py-2 rounded-md hover:bg-sky-500 hover:text-zinc-900 transition-all shadhow-2xl"
    >
      {props.label}
    </button>
  );
};

export default CTAThird;
