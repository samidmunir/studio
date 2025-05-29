import { useNavigate, useLocation } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      onClick={() => navigate("/register")}
      className={`${
        location.pathname === "/register"
          ? "bg-emerald-500 text-zinc-900"
          : "bg-zinc-900"
      } w-[100px] text-center text-lg text-emerald-500 font-bold border-2 border-emerald-500 px-4 py-2 rounded-md hover:bg-emerald-500 hover:text-zinc-900 transition-all`}
    >
      Register
    </button>
  );
};

export default RegisterButton;
