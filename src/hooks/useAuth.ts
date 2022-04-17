import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { authState, login } = useContext(AuthContext);
  const { email, accessToken } = authState;

  return {
    email,
    accessToken,
    login,
  };
};
