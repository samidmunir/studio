import { useUser } from "../../context/UserContext";

const LogoutButton = () => {
  const { logout } = useUser();

  return (
    <button
      onClick={() => logout()}
      className="outline-none text-lg px-2 py-1 rounded-md text-rose-500 border-2 border-rose-500 hover:bg-rose-500 hover:text-zinc-100 font-semibold transition-all"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
