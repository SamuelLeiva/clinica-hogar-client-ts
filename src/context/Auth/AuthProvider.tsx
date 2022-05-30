import { useReducer, useEffect } from "react";

import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { AuthState } from "../../interfaces/Auth/auth";

const INITIAL_STATE: AuthState = {};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE, () => {
    const localData = localStorage.getItem("hogar-auth");
    return localData ? JSON.parse(localData) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem("hogar-auth", JSON.stringify(authState));
  }, [authState]);

  const login = (email: string, accessToken: string) => {
    dispatch({ type: "login", payload: { email, accessToken } });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  const refreshToken = (accessToken: string) => {
    dispatch({ type: "refreshToken", payload: { accessToken } });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        refreshToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
