import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      <div className="w-full px-4 py-2 bg-zinc-900">
        <h1 className="text-zinc-300 text-4xl text-center">NAVBAR</h1>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
