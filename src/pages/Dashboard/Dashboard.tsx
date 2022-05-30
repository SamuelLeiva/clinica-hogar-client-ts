import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../hooks/Auth/useAuth";

const Dashboard = () => {
  const { email, accessToken } = useAuth();

  return email && accessToken ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default Dashboard;
