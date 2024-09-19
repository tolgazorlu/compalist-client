import { Outlet } from "react-router-dom";
import Navbar from "../components/03_Global/Navbar";
import Footer from "../components/03_Global/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { IStaticMethods } from "preline/preline";
import { Analytics } from "@vercel/analytics/react";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <Analytics />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
