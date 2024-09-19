// UserLayout.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Navbar from "../components/03_Global/Navbar";
import Header from "../components/01_UserDashboard/Header";
import Footer from "../components/03_Global/Footer";

const UserLayout: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  return isAuthenticated && user?.role == "normal" ? (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/auth/signin" />
  );
};

export default UserLayout;
