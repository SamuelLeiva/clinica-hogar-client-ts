import { useAuth } from "./useAuth";
import { logoutService } from "../../services/auth/authServices";

const useLogout = () => {
  const { logout } = useAuth();

  const logOut = async () => {
    logout();
    try {
      logoutService();
    } catch (error) {
      console.error(error);
    }
  };

  return { logOut };
};

export default useLogout;
