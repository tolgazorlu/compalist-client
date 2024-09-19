import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Header from "../components/00_AdminDashboard/Header";
import Breadcrumb from "../components/00_AdminDashboard/Breadcrumb";
import Sidebar from "../components/00_AdminDashboard/Sidebar";

const AdminLayout: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  return isAuthenticated && user?.role == "admin" ? (
    <div>
      <Header />
      <Breadcrumb />
      <Sidebar />
      {/* Content */}
      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <Outlet />
        </div>
      </div>
      {/* End Content */}
      {/* ========== END MAIN CONTENT ========== */}
    </div>
  ) : (
    <Navigate to="/auth/signin" />
  );
};

export default AdminLayout;
