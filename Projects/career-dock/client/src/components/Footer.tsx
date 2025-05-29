const Footer = () => {
  return (
    <section className="bg-zinc-900 w-full px-16 py-10 shadow-2xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-amber-500 font-semibold">Career Dock</h1>
          <h2 className="text-xl text-zinc-300">
            Track your career search journey!
          </h2>
          <p className="text-sm text-zinc-500 italic">
            Best job tracking tool available.
          </p>
        </div>
        <div className="flex items-center gap-16 cursor-default">
          <p className="text-xl text-zinc-300 hover:text-zinc-100 transition-all">
            About
          </p>
          <p className="text-xl text-zinc-300 hover:text-zinc-100 transition-all">
            Community
          </p>
          <p className="text-xl text-zinc-300 hover:text-zinc-100 transition-all">
            API Docs
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-zinc-500">
          Developed by <span className="text-amber-500">Zephiron</span> | 2025 ©
        </p>
      </div>
    </section>
  );
};

export default Footer;
