import CTAPrimary from "./ui/CTAPrimary";
import CTASecondary from "./ui/CTASecondary";
import { useUser } from "../context/UserContext";

const Hero = () => {
  const { user } = useUser();
  return (
    <section className="w-full bg-zinc-800 p-8 h-[50vh] flex justify-center items-center">
      <div className="bg-zinc-900 w-full h-full flex items-center justify-center rounded-md shadow-2xl">
        <div>
          <h1 className="text-5xl text-zinc-300">
            Welcome to{" "}
            <span className="text-amber-500 font-semibold">Career Dock</span>
          </h1>
          <h2 className="text-4xl text-zinc-500 mt-2">
            Track your career search journey!
          </h2>
          <div className="flex items-center justify-center gap-8 mt-8">
            {user ? (
              <CTASecondary label="Get Started" />
            ) : (
              <div className="flex items-center gap-8">
                <CTAPrimary label="Login" />
                <CTASecondary label="Get Started" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
