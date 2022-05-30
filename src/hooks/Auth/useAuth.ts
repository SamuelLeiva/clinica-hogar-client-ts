import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

export const useAuth = () => {
  const { authState, login, refreshToken, logout } = useContext(AuthContext);
  const { email, accessToken } = authState;

  return {
    email,
    accessToken,
    login,
    refreshToken,
    logout,
  };
};