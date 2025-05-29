import { useNavigate, useLocation } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      onClick={() => navigate("/login")}
      className={`${
        location.pathname === "/login"
          ? "bg-amber-500 text-zinc-900"
          : "bg-zinc-900"
      } w-[100px] text-center text-lg text-amber-500 font-bold border-2 border-amber-500 px-4 py-2 rounded-md hover:bg-amber-500 hover:text-zinc-900 transition-all`}
    >
      Login
    </button>
  );
};

export default LoginButton;
