import { useAuth } from "./useAuth";
import axios from "../../services/axios";
import { LOGOUT_URL } from "../../constants/server_uris";

const useLogout = () => {
  const { logout } = useAuth();

  const logOut = async () => {
    logout();
    try {
      const response = await axios(LOGOUT_URL, {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { logOut };
};

export default useLogout;
