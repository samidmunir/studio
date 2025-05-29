import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Protected = ({ children }: { children: React.ReactElement }) => {
  const { token, loading } = useUser();

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center text-5xl text-amber-500 font-bold">
        LOADING...
      </div>
    );
  }

  return token ? children : <Navigate to="/login" replace />;
};

export default Protected;
