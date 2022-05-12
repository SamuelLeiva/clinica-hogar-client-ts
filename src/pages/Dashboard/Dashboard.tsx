import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {

  const { email, accessToken } = useAuth();

  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();


  // }, []);

  return (
    email && accessToken
    ?
    <>
      <Navbar />
      <Outlet />
    </>
    :
    <Navigate to="/" />
  );
};

export default Dashboard;
