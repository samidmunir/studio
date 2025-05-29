import {
  BsEnvelopeFill,
  BsShieldLockFill,
  BsFillPersonFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Login failed.");
      }

      alert("Registration successful! Please log in.");

      navigate("/login");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <section className="w-full bg-zinc-800 p-16 h-[87.5vh] flex justify-center items-center">
      <div className="bg-zinc-900 w-full h-full flex items-center justify-center">
        <div className="bg-zinc-700 px-16 py-8 rounded-md shadow-2xl">
          <h1 className="text-5xl text-zinc-300 font-semibold">
            Register for a new{" "}
            <span className="text-amber-500">Career-Dock</span> account
          </h1>
          <form className="flex flex-col items-center mt-8 bg-zinc-800 p-8 rounded-md shadow-2xl">
            <div className="flex items-center justify-between w-[650px]">
              <div className="flex items-center gap-4 text-amber-500 text-xl">
                <BsFillPersonFill size={36} />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="placeholder-amber-500 outline-none border-2 border-amber-500 px-4 py-1 rounded-md"
                  required
                />
              </div>
              <div className="flex items-center gap-4 text-amber-500 text-xl">
                <BsFillPersonLinesFill size={36} />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="placeholder-amber-500 outline-none border-2 border-amber-500 px-4 py-1 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-[650px] mt-8">
              <div className="flex items-center gap-4 text-amber-500 text-xl">
                <BsEnvelopeFill size={36} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-[600px] placeholder-amber-500 outline-none border-2 border-amber-500 px-2 py-1 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-[650px] mt-8">
              <div className="flex items-center gap-4 text-amber-500 text-xl">
                <BsShieldLockFill size={36} />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="placeholder-amber-500 outline-none border-2 border-amber-500 px-4 py-1 rounded-md"
                  required
                />
              </div>
              <div className="flex items-center gap-4 text-amber-500 text-xl">
                <BsShieldLockFill size={36} />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="placeholder-amber-500 outline-none border-2 border-amber-500 px-4 py-1 rounded-md"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-[650px] text-center text-lg text-amber-500 font-bold border-2 border-amber-500 px-4 py-2 rounded-md hover:bg-amber-500 hover:text-zinc-900 transition-all mt-8"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
