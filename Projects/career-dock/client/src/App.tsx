import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import Protected from "./components/Protected";
import { ToastContainer } from "react-toastify";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <DashboardPage />
            </Protected>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/create"
          element={
            <Protected>
              <CreateProductPage />
            </Protected>
          }
        />
        <Route
          path="/record/edit/:id"
          element={
            <Protected>
              <EditProductPage />
            </Protected>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
