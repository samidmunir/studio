import { BsEnvelopeFill, BsShieldLockFill } from "react-icons/bs";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { login } = useUser();

  const [form, setForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error("Login failed.", {
          autoClose: 3000,
          theme: "dark",
        });
        throw new Error(data.message || "Login failed.");
      }

      login(data.token, data.user);

      navigate("/dashboard");

      toast.success("You are logged in", {
        autoClose: 3000,
        theme: "dark",
      });
    } catch (err: any) {
      alert(err.message);
    }
  };
  return (
    <section className="w-full bg-zinc-800 p-8 h-[80vh] flex justify-center items-center">
      <div className="bg-zinc-900 w-full h-full flex items-center justify-center">
        <div className="bg-zinc-800 px-16 py-8 rounded-md shadow-2xl w-[500px]">
          <h1 className="text-5xl text-zinc-300 font-semibold">
            Login to your <span className="text-amber-500">Career-Dock</span>{" "}
            account
          </h1>
          <form className="flex flex-col items-center mt-8 bg-zinc-900 p-8 rounded-md shadow-2xl">
            <div className="flex items-center gap-4 text-amber-500 text-xl mt-4 border-b-2 border-amber-500 py-4">
              <BsEnvelopeFill size={36} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex items-center gap-4 text-amber-500 text-xl mt-8 border-b-2 border-amber-500 py-4">
              <BsShieldLockFill size={36} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-[250px] placeholder-amber-500 outline-none px-2 py-1 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-[250px] text-lg text-amber-500 font-bold px-4 py-2 rounded-md border-b-2 border-t-2 hover:bg-amber-500 hover:text-zinc-900 transition-all mt-8"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
